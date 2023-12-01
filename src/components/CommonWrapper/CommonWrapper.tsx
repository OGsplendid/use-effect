import React, { PropsWithChildren } from 'react'

export const CommonWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='common-wrapper'>
        {children}
    </div>
  )
}
