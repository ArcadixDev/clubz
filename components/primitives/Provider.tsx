'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ReactNode } from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function AuthProvider({ children, ...props }: SessionProviderProps) {
	return <SessionProvider {...props}>{children}</SessionProvider>;
}
