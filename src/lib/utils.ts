import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatDistanceToNow } from 'date-fns';

export function cn(...inputs: string[]) {
  return clsx(inputs.filter(Boolean));
}

export function formatRelativeTime(iso: string) {
  const date = new Date(iso);
  return formatDistanceToNow(date, { addSuffix: true });
}

export function truncate(str: string, len: number) {
  if (str.length <= len) return str;
  return str.substring(0, len) + '...';
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateId() {
  try {
    return crypto.randomUUID();
  } catch {
    return Math.random().toString(36).substr(2, 9);
  }
}