'use client';

import { Icons, Primitives, Images } from '@/components/icons';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast, Toaster } from 'react-hot-toast';
import { FaApple, FaGoogle, FaUser } from 'react-icons/fa';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi';
import Password from '../Fields';
import { useState } from 'react';
import { Router } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { MdLock, MdMail, MdPerson } from 'react-icons/md';
// import { Icons } from '@/components/icons';

export const SignupFormSchema = z.object({
	name: z.string().min(4, {
		message: 'Name must not be less than 4 characters.',
	}),
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

export function SignupFormDemo() {
	const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof SignupFormSchema>>({
		resolver: zodResolver(SignupFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof SignupFormSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		const response = await fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: values }),
		});

		const userInfo = await response.json();
		const { data, error, errorCode } = userInfo;

		if (data) {
			toast.success(
				(t) => (
					<span className="flex items-center space-x-3">
						<b>{`Account Created Successfully!`}</b>
					</span>
				),
				{ position: 'bottom-center' },
			);
			form.reset();
			setTimeout(() => {
				router.push(`/login`);
			}, 3000);
		}

		if (error && errorCode === '409') {
			console.error(error);
			toast.error(
				(t) => (
					<span className="flex items-center space-x-3">
						<b>{`${error}, Try Loggin in!`}</b>
					</span>
				),
				{ position: 'bottom-center' },
			);
			setTimeout(() => {
				router.push(`/login?email=${values.email}`);
			}, 3000);
		}
	};
	return (
		<Card className="max-w-lg w-full mx-auto border-none shadow-none">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<CardHeader className="space-y-1">
						<CardTitle className="text-4xl font-bold text-center mb-12">
							Create Account
						</CardTitle>
						{/* <CardDescription>
							Enter your email below to create your account
						</CardDescription> */}
					</CardHeader>
					<CardContent className="pl-12 pr-6 grid gap-6">
						<div className="grid gap-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<div className="relative">
												<Primitives.person
													className={`absolute -left-12 top-0 m-2.5 h-6 w-6`}
												/>
												<Input
													placeholder="name"
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
										{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
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
						<div className="my-3">
							<div className="flex items-center space-x-2 justify-center text-sm">
								<span>Already have an account?</span>
								<Link
									href={'/login'}
									className="font-semibold text-blue-600"
								>
									Login
								</Link>
							</div>
						</div>

						<div className="flex justify-center">
							<Button className="w-44 p-5" type="submit">
								Sign up
							</Button>
						</div>
						<div className="relative my-3">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t border-foreground" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-foreground">
									OR
								</span>
							</div>
						</div>
						<div className="flex items-center justify-center space-x-2 ">
							<Button
								variant="ghost"
								onClick={() => {
									signIn('google');
								}}
								type="button"
								className="w-fit"
							>
								<FcGoogle className="h-6 w-6" />
							</Button>
							<Button
								variant="ghost"
								onClick={() => console.log('login with apple')}
								type="button"
								className="w-fit"
							>
								<FaApple className="h-6 w-6" />
							</Button>
						</div>
					</CardContent>
					<CardFooter></CardFooter>
				</form>
			</Form>
		</Card>
	);
}
