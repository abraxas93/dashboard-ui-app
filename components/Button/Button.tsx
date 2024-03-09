/* eslint-disable react/display-name */
import {
  ButtonHTMLAttributes,
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';
import cn from 'classnames'

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

const varianStyles: Record<ButtonVariant, string> = {
  filled: 'font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
  outline: 'border border-primary text-primary',
  clear: 'text-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  m: 'text-base',
  l: 'text-lg',
  xl: 'text-xl', 
}

const colorStyles: Record<ButtonColor, string> = {
  normal: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  color?: ButtonColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    fullWidth,
    size = 'm',
    addonLeft,
    addonRight,
    color = 'normal',
    ...otherProps
} = props;
  return (
    <button
        type="button"
        className={cn(
            className,
            varianStyles[variant],
            sizeStyles[size],
            colorStyles[color],
            {"w-full": fullWidth}
        )}
        disabled={disabled}
        {...otherProps}
        ref={ref}
    >
        <div className="flex">{addonLeft}</div>
        {children}
        <div className="flex">{addonRight}</div>
    </button>
  );
});