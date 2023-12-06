'use client';

import { Icons, Primitives } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { Checkbox } from '@/components/ui/checkbox';
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';

export const LoginFormSchema = z.object({
	email: z
		.string()
		.min(2, {
			message: 'email must be at least 2 characters.',
		})
		.email({ message: 'Invalid email address' }),
	password: z.string().min(8, {
		message: 'Password should contain atleast 8 characters',
	}),
});

export function LoginFormDemo() {
	const searchParams = useSearchParams();
	const callback = searchParams.get('callbackUrl');
	const error = searchParams.get('error');

	const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

	if (error) {
		console.log('error catched => ', error);
	}

	if (error === 'OAuthAccountNotLinked') {
		console.log('error is OAuthAccountNotLinked');
	}

	// 1. Define your form.
	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: searchParams.get('email') ?? '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
		await signIn('credentials', {
			...values,
			callbackUrl: callback ?? '/',
			redirect: true,
		});
	};

	return (
		<Card className="max-w-md mx-auto w-full shadow-none border-none">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<CardHeader className="space-y-1">
						<CardTitle className="text-4xl font-bold text-center mb-12">
							Login
						</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-6 pl-14 pr-6">
						<div className="grid gap-2">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<div className="relative">
												<Primitives.mail
													className={`absolute -left-12 m-2.5 h-6 w-6`}
												/>
												<Input
													placeholder="user@example.com"
													{...field}
													className=" py-5 outline-none border-none bg-secondary"
												/>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-2">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<div className="relative">
												<Primitives.lock
													className={`absolute -left-12 m-2.5 h-6 w-6`}
												/>
												<Input
													type={
														isPassVisible
															? 'text'
															: 'password'
													}
													{...field}
													className="pr-9 py-5 outline-none border-none bg-secondary"
													placeholder="password"
												/>
												<button
													type="button"
													onClick={() =>
														setIsPassVisible(
															(ref) => !ref,
														)
													}
													className="absolute inset-y-0 right-0 m-2.5 h-5 w-5"
												>
													{isPassVisible ? (
														<FiEyeOff />
													) : field.value ? (
														<FiEye />
													) : null}
												</button>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="my-3 flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Checkbox
									id="rememberme"
									defaultChecked
									className="rounded-md"
								/>
								<label
									htmlFor="rememberme"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 selection:bg-none"
								>
									Remember Me
								</label>
							</div>
							<div className=" text-right">
								<Link
									href={'/forgot-password'}
									className={`text-xs text-blue-600 font-semibold`}
								>
									forgot Password?
								</Link>
							</div>
						</div>
						<div className="flex justify-center">
							<Button className="w-44 p-5" type="submit">
								Login
							</Button>
						</div>
						<div className=" text-center">
							<Link
								href={`/signup`}
								className="text-xs text-blue-600 font-semibold"
							>
								Create An Account
							</Link>
						</div>
					</CardContent>
					<CardFooter className="grid gap-4">
						{/* <div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Or Login with
								</span>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<Button
								variant="outline"
								onClick={() => signIn('google')}
								type="button"
								className="w-full"
							>
								<FaGoogle className="mr-2 h-4 w-4" />
								Google
							</Button>
							<Button
								variant="outline"
								onClick={() => console.log('login with apple')}
								type="button"
								className="w-full"
							>
								<FaApple className="mr-2 h-4 w-4" />
								Apple
							</Button>
						</div> */}
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
}
