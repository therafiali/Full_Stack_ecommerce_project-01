import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
   <section className='mx-auto max-w-screen-xl px-3 med:px-10 zero:px-4 lg:px-14 '>
    {children}
   </section>
  )
}

export default Wrapper