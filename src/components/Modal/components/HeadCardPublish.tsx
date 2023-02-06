import { BackIcon } from '@/components'
import React from 'react'

type Props = {}

const HeadCardPublish = (props: Props) => {
  return (
    <div className='bg-slate-500 flex flex-row gap-2 w-full'>
      <BackIcon />
      <span className='text-white text-center flex-1'>Publicación</span>
    </div>
  )
}

export default HeadCardPublish