import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
   <section className='mx-auto max-w-screen-xl px-3 sm:px-10'>
    {children}
   </section>
  )
}

export default Wrapper