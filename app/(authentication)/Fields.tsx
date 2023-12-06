'use client';

import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { z } from 'zod';
import { SignupFormSchema } from './signup/signup-form';
import { LoginFormSchema } from './login/login-form';

const PasswordInput = ({
	schema,
	field,
}: {
	schema: z.infer<typeof SignupFormSchema> | z.infer<typeof LoginFormSchema>;
	field: ControllerRenderProps<typeof schema, 'password'>;
}) => {
	const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

	useEffect(() => {
		console.log('isPassvisible => ', isPassVisible);
	}, [isPassVisible, setIsPassVisible]);

	return (
		<div className="relative">
			<FiLock className={`absolute inset-y-0 m-2.5`} />
			<Input
				type={isPassVisible ? 'text' : 'password'}
				{...field}
				className="px-9"
				placeholder="password"
			/>
			<button
				type="button"
				onClick={() => setIsPassVisible((ref) => !ref)}
				className="absolute inset-y-0 right-0 m-2.5"
			>
				{isPassVisible ? <FiEyeOff /> : <FiEye />}
			</button>
		</div>
	);
};

const NameInput = ({
	schema,
	field,
}: {
	schema: z.infer<typeof SignupFormSchema>;
	field: ControllerRenderProps<typeof schema, 'password'>;
}) => {
	return (
		<div className="relative">
			<FiUser className={`absolute inset-y-0 m-2.5`} />
			<Input placeholder="name" {...field} className="pl-9" />
		</div>
	);
};

const MailInput = ({
	schema,
	field,
}: {
	schema: z.infer<typeof SignupFormSchema> | z.infer<typeof LoginFormSchema>;
	field: ControllerRenderProps<typeof schema, 'email'>;
}) => {
	return (
		<div className="relative">
			<FiMail className={`absolute inset-y-0 m-2.5`} />
			<Input placeholder="user@example.com" {...field} className="pl-9" />
		</div>
	);
};

export default PasswordInput;
export { NameInput, MailInput, PasswordInput };
