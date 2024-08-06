import React from 'react';
interface GridProps {
    children: React.ReactNode;
    gap?: string;
    className?: string;
}
interface GridItemProps {
    children: React.ReactNode;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    className?: string;
}
declare const Grid: React.FC<GridProps> & {
    Item: React.FC<GridItemProps>;
};
export { Grid };
export type { GridProps, GridItemProps };
