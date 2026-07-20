'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuxuryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  icon?: React.ReactNode;
}

export const LuxuryButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, LuxuryButtonProps>(
  ({ children, href, onClick, variant = 'primary', size = 'md', className, type = 'button', icon }, ref) => {
    const baseClasses = cn(
      'group relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-500 ease-luxury overflow-hidden',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'
    );

    const sizeClasses = {
      sm: 'px-5 py-2.5 text-xs rounded-full',
      md: 'px-8 py-3.5 text-sm rounded-full',
      lg: 'px-10 py-4 text-base rounded-full',
    };

    const variantClasses = {
      primary: 'bg-champagne text-obsidian hover:bg-champagne-dark luxury-shadow hover:luxury-shadow-lg',
      outline: 'border border-champagne text-charcoal hover:bg-champagne hover:text-obsidian',
      ghost: 'text-charcoal hover:text-champagne',
      dark: 'bg-obsidian text-champagne hover:bg-obsidian-light luxury-shadow',
    };

    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        {variant === 'primary' && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-champagne/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
      </>
    );

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
    };

    if (href) {
      return (
        <motion.div {...motionProps} className="inline-block">
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }
);

LuxuryButton.displayName = 'LuxuryButton';
