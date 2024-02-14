import React, { ReactNode } from 'react'

interface BoxProps {
    children: ReactNode;
}


export function Box({children, ...props} :BoxProps ){
  return (
    <div {...props}>
        {children}
    </div>
  )
}
