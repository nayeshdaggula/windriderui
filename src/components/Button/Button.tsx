import React, { ReactNode } from 'react';
import clsx from 'clsx';
import './button.css';

interface ButtonProps {
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'light' | 'filled' | 'outline' | 'ghost';
    rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'teal' | 'gray' | 'orange' | 'cyan' | 'lime' | 'amber' | 'emerald' | 'lightBlue' | 'violet' | 'fuchsia' | 'rose' | 'warmGray' | 'trueGray' | 'coolGray' | 'blueGray';
    className?: string;
}

export function Button({
    children,
    size = 'md',
    variant = 'light',
    rounded = 'md',
    color = 'blue',
    className = '',
}: ButtonProps) {
    
    const sizeClasses = {
        xs: 'size-xs',
        sm: 'size-sm',
        md: 'size-md',
        lg: 'size-lg',
        xl: 'size-xl',
    };

    const roundedClasses = {
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
    };

    const filledcolorClasses: { [key: string]: string }  = {
        black: 'bg-black text-white hover:bg-black',
        white: 'bg-white text-black hover:bg-white',
        red: 'bg-red-500 text-white hover:bg-red-600',
        green: 'bg-green-500 text-white hover:bg-green-600',
        blue: 'bg-blue-500 text-white hover:bg-blue-600',
        yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
        purple: 'bg-purple-500 text-white hover:bg-purple-600',
        pink: 'bg-pink-500 text-white hover:bg-pink-600',
        indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
        teal: 'bg-teal-500 text-white hover:bg-teal-600',
        gray: 'bg-gray-500 text-white hover:bg-gray-600',
        orange: 'bg-orange-500 text-white hover:bg-orange-600',
        cyan: 'bg-cyan-500 text-white hover:bg-cyan-600',
        lime: 'bg-lime-500 text-white hover:bg-lime-600',
        amber: 'bg-amber-500 text-white hover:bg-amber-600',
        emerald: 'bg-emerald-500 text-white hover:bg-emerald-600',
        lightBlue: 'bg-lightBlue-500 text-white hover:bg-lightBlue-600',
        violet: 'bg-violet-500 text-white hover:bg-violet-600',
        fuchsia: 'bg-fuchsia-500 text-white hover:bg-fuchsia-600',
        rose: 'bg-rose-500 text-white hover:bg-rose-600',
        warmGray: 'bg-warmGray-500 text-white hover:bg-warmGray-600',
        trueGray: 'bg-trueGray-500 text-white hover:bg-trueGray-600',
        coolGray: 'bg-coolGray-500 text-white hover:bg-coolGray-600',
        blueGray: 'bg-blueGray-500 text-white hover:bg-blueGray-600',
    };

    const lightcolorClasses: { [key: string]: string }  = {
        black: 'bg-black text-black hover:bg-black',
        white: 'bg-white text-white hover:bg-white',
        red: 'bg-red-100 text-red-500 hover:bg-red-200',
        green: 'bg-green-100 text-green-500 hover:bg-green-200',
        blue: 'bg-blue-100 text-blue-500 hover:bg-blue-200',
        yellow: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200',
        purple: 'bg-purple-100 text-purple-500 hover:bg-purple-200',
        pink: 'bg-pink-100 text-pink-500 hover:bg-pink-200',
        indigo: 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200',
        teal: 'bg-teal-100 text-teal-500 hover:bg-teal-200',
        gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200',
        orange: 'bg-orange-100 text-orange-500 hover:bg-orange-200',
        cyan: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200',
        lime: 'bg-lime-100 text-lime-500 hover:bg-lime-200',
        amber: 'bg-amber-100 text-amber-500 hover:bg-amber-200',
        emerald: 'bg-emerald-100 text-emerald-500 hover:bg-emerald-200',
        lightBlue: 'bg-lightBlue-100 text-lightBlue-500 hover:bg-lightBlue-200',
        violet: 'bg-violet-100 text-violet-500 hover:bg-violet-200',
        fuchsia: 'bg-fuchsia-100 text-fuchsia-500 hover:bg-fuchsia-200',
        rose: 'bg-rose-100 text-rose-500 hover:bg-rose-200',
        warmGray: 'bg-warmGray-100 text-warmGray-500 hover:bg-warmGray-200',
        trueGray: 'bg-trueGray-100 text-trueGray-500 hover:bg-trueGray-200',
        coolGray: 'bg-coolGray-100 text-coolGray-500 hover:bg-coolGray-200',
        blueGray: 'bg-blueGray-100 text-blueGray-500 hover:bg-blueGray-200',
    };

    const getBackgroundAndTextClasses = () => {
        if (variant === 'light') {
            return lightcolorClasses[color] || `${color} text-white`;
        } else if (variant === 'filled') {
            return filledcolorClasses[color] || `${color} text-white`;
        } else if (variant === 'outline') {
            return `bg-white border border-${color} text-${color}`;
        } else if (variant === 'ghost') {
            return `text-${color}`;
        } else {
            return `bg-white text-black border border-black`;
        }
    };

    const buttonClasses = clsx(
        'mainbutton',
        roundedClasses[rounded],
        sizeClasses[size],
        getBackgroundAndTextClasses(),
        className
    );

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
}
