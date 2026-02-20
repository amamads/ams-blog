import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const capitalize = (word: string): string =>
  word.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
export default capitalize;