import React from 'react';
declare enum ImageFit {
    contain = "object-contain",
    cover = "object-cover",
    fill = "object-fill",
    none = "object-none",
    scaleDown = "object-scale-down"
}
declare enum ImagePosition {
    bottom = "object-bottom",
    center = "object-center",
    left = "object-left",
    leftBottom = "object-left-bottom",
    leftTop = "object-left-top",
    right = "object-right",
    rightBottom = "object-right-bottom",
    rightTop = "object-right-top",
    top = "object-top"
}
declare enum ImageRadius {
    none = "rounded-none",
    sm = "rounded-sm",
    md = "rounded-md",
    lg = "rounded-lg",
    xl = "rounded-xl",
    full = "rounded-full"
}
interface ImageProps {
    src: string;
    alt: string;
    fit?: keyof typeof ImageFit;
    position?: keyof typeof ImagePosition;
    radius?: keyof typeof ImageRadius;
    width?: string | number;
    height?: string | number;
    className?: string;
}
export declare function Image({ src, alt, fit, position, radius, width, height, className, ...props }: ImageProps): React.JSX.Element;
export {};
