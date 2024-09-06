import React, { useEffect, useState } from 'react';

enum TextSize {
    xs = 'text-xs',
    sm = 'text-sm',
    md = 'text-md',
    lg = 'text-lg',
    xl = 'text-xl',
}

enum TextColor {
    black = 'text-black',
    white = 'text-white',
    red = 'text-red-500',
    green = 'text-green-500',
    blue = 'text-blue-500',
    yellow = 'text-yellow-500',
    purple = 'text-purple-500',
    pink = 'text-pink-500',
    indigo = 'text-indigo-500',
    teal = 'text-teal-500',
    gray = 'text-gray-500',
    orange = 'text-orange-500',
    cyan = 'text-cyan-500',
    lime = 'text-lime-500',
    amber = 'text-amber-500',
    emerald = 'text-emerald-500',
    lightBlue = 'text-lightBlue-500',
    violet = 'text-violet-500',
    fuchsia = 'text-fuchsia-500',
    rose = 'text-rose-500',
    warmGray = 'text-warmGray-500',
    trueGray = 'text-trueGray-500',
    coolGray = 'text-coolGray-500',
    blueGray = 'text-blueGray-500',
    inherit = 'text-current',
}

enum TextAlign {
    left = 'text-left',
    center = 'text-center',
    right = 'text-right',
    justify = 'text-justify',
}

enum TextTransform {
    uppercase = 'uppercase',
    lowercase = 'lowercase',
    capitalize = 'capitalize',
    normalCase = 'normal-case',
}

enum TextDecoration {
    lineThrough = 'line-through',
    underline = 'underline',
    noUnderline = 'no-underline',
}

enum TextWeight {
    thin = 'font-thin',
    extralight = 'font-extralight',
    light = 'font-light',
    normal = 'font-normal',
    medium = 'font-medium',
    semibold = 'font-semibold',
    bold = 'font-bold',
    extrabold = 'font-extrabold',
    black = 'font-black',
}

enum TextStyles {
    italic = 'italic',
    notItalic = 'not-italic',
}

interface TextProps {
    children: React.ReactNode;
    component?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    size?: keyof typeof TextSize;
    color?: keyof typeof TextColor;
    align?: keyof typeof TextAlign;
    tt?: keyof typeof TextTransform;
    td?: keyof typeof TextDecoration;
    tw?: keyof typeof TextWeight;
    ts?: keyof typeof TextStyles;
    className?: string;
}

export function Text({
    children,
    component = 'p',
    size = 'md',
    color = 'inherit',
    align = 'left',
    tt = 'normalCase',
    td = 'noUnderline',
    tw = 'normal',
    ts = 'notItalic',
    className = '',
    ...props
}: TextProps) {
    const Component = component;

    const textClasses = [
        TextSize[size],
        TextColor[color],
        TextAlign[align],
        TextTransform[tt],
        TextDecoration[td],
        TextWeight[tw],
        TextStyles[ts],
        className,
    ]
    .filter(Boolean)
    .join(' ');

    return (
        <Component className={textClasses} {...props}>
            {children}
        </Component>
    );
}