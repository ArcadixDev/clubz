import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const apiEndpoint = `https://6a575172cb2fbb8f6509ce2fa.mockapi.io/`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
