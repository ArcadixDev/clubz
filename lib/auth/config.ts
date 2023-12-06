import {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next';
import { NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../prisma';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';

export const config: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Clubz',
			credentials: {
				email: {
					label: 'email',
					type: 'text',
					placeholder: 'user@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { email, password } = credentials as Pick<
					User,
					'email' | 'password'
				>;

				if (!email || !password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				});

				if (!user) {
					return null;
				}

				const passwordsMatch = await compare(
					password,
					user.password as string,
				);

				if (!passwordsMatch) {
					return null;
				}

				return user;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log('signin from callbacks ... ');
			const res = await prisma.user.findUnique({
				where: {
					email: user?.email!,
				},
			});

			// if (res) {
			// 	await prisma.account.create({ data: {

			// 	} });
			// }

			// 			user_id: 655f92ab2ca7527b5c2ddcd9
			// type: "oauth"
			// provider:"google"
			// provider_account_id:"113632254210290460300"
			// access_token:"ya29.a0AfB_byBfgwkWFbPNJg-03bsGpnfKXm4tLr-Wz2yPTHpgjAnomDBhCwYHFEugGC2…"
			// expires_at:1700765882
			// token_type:"Bearer"
			// scope:"https://www.googleapis.com/auth/userinfo.email openid https://www.goog…"
			// id_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjViMzcwNjk2MGUzZTYwMDI0YTI2NTVlNzhjZmE2M2…"

			console.log('user => ', user);
			console.log('account => ', account);
			console.log('profile => ', profile);
			console.log('email => ', email);
			console.log('credentials => ', credentials);
			if (!res) {
				return true;
			}
			return '/login?error=AlreadyLinkedAccount';
		},
		async jwt({ token, user, session }) {
			if (user) {
				return {
					...token,
					// @ts-ignore
					userId: user.id,
				};
			}
			return token;
		},
		async session({ session, token, user }) {
			return {
				...session,
				user: {
					...session.user,
					id: token.userId,
				},
			};
		},
	},
	events: {
		async linkAccount({ account, profile, user }) {
			// console.log('account => ', account);
			// console.log('profile => ', profile);
			// console.log('user => ', user);
		},
	},
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, config);
}
