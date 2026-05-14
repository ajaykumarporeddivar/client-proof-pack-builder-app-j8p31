'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BiLoader } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  href,
}: ButtonProps) {
  const classNames = cn(
    'rounded-lg',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-zinc-200 text-zinc-900 hover:bg-zinc-300': variant === 'secondary',
      'bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-100': variant === 'outline',
      'bg-transparent text-zinc-900 hover:text-zinc-700': variant === 'ghost',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
    },
    {
      'text-xs py-1 px-2': size === 'sm',
      'text-sm py-2 px-4': size === 'md',
      'text-base py-3 px-6': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <BiLoader className="mr-2 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}

// Rest of the UI components...