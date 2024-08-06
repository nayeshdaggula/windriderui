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

const Grid: React.FC<GridProps> & { Item: React.FC<GridItemProps> } = ({ children, gap = 'gap-4', className = '' }) => {
  return (
    <div className={`grid ${gap} ${className}`}>
      {children}
    </div>
  );
};

const GridItem: React.FC<GridItemProps> = ({
  children,
  xs = 'col-span-12',
  sm = 'sm:col-span-6',
  md = 'md:col-span-4',
  lg = 'lg:col-span-3',
  xl = 'xl:col-span-2',
  className = '',
}) => {
  return (
    <div className={`${xs} ${sm} ${md} ${lg} ${xl} ${className}`}>
      {children}
    </div>
  );
};

// Assign GridItem as a static property of Grid
Grid.Item = GridItem;

export {Grid};
export type { GridProps, GridItemProps };