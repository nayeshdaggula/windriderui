import React, { ReactNode } from 'react';
import './button.css';
interface ButtonProps {
    children: ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'light' | 'filled' | 'outline' | 'ghost';
    rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'teal' | 'gray' | 'orange' | 'cyan' | 'lime' | 'amber' | 'emerald' | 'lightBlue' | 'violet' | 'fuchsia' | 'rose' | 'warmGray' | 'trueGray' | 'coolGray' | 'blueGray';
    className?: string;
}
export declare function Button({ children, size, variant, rounded, color, className, ...props }: ButtonProps): React.JSX.Element;
export {};
