import React from 'react';

enum ImageFit {
    contain = 'object-contain',
    cover = 'object-cover',
    fill = 'object-fill',
    none = 'object-none',
    scaleDown = 'object-scale-down',
}

enum ImagePosition {
    bottom = 'object-bottom',
    center = 'object-center',
    left = 'object-left',
    leftBottom = 'object-left-bottom',
    leftTop = 'object-left-top',
    right = 'object-right',
    rightBottom = 'object-right-bottom',
    rightTop = 'object-right-top',
    top = 'object-top',
}

enum ImageRadius {
    none = 'rounded-none',
    sm = 'rounded-sm',
    md = 'rounded-md',
    lg = 'rounded-lg',
    xl = 'rounded-xl',
    full = 'rounded-full',
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

export function Image({
    src,
    alt,
    fit = 'cover',
    position = 'center',
    radius = 'none',
    width = 'auto',
    height = 'auto',
    className = '',
    ...props
}: ImageProps) {
    const imageClasses = [
        ImageFit[fit],
        ImagePosition[position],
        ImageRadius[radius],
        className,
    ]
    .filter((c) => c)
    .join(' ');

    const style = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <img
            src={src}
            alt={alt}
            className={imageClasses}
            style={style}
            {...props}
        />
    );
}
