import React, { ReactNode } from 'react';
type GridCols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '56' | '64' | 'xl';
interface ResponsiveProps<T> {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}
interface SimpleGridProps {
    cols?: ResponsiveProps<GridCols>;
    spacing?: ResponsiveProps<Spacing>;
    verticalSpacing?: ResponsiveProps<Spacing>;
    children: ReactNode;
    className?: string;
}
export declare const SimpleGrid: React.FC<SimpleGridProps>;
export {};
