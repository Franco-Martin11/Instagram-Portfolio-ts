import { roundedThumnail } from '@/types/types'
import { FC } from 'react'


const RoundedThumnail: FC<roundedThumnail> = ({ gradient, imgUrl, imgAlt, boxSize }, { children }) => {

  const StyleThumbnail = {
    icon: 'p-[2px] w-[96px] h-[96px]',
    profile: 'p-[3px] w-[166px] h-[166px]'
  }

  return (
    <figure className={`rounded-full flex 
    item-center justify-center ${boxSize === 'icon' ? `${StyleThumbnail.icon}` : `${StyleThumbnail.profile}`}
    ${gradient ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gray-200'}
    `}>
      <img src={imgUrl} alt={imgAlt} className='max-w-full w-full object-cover p-1 bg-white rounded-full' />
      {children}
    </figure>
  )
}

export default RoundedThumnail