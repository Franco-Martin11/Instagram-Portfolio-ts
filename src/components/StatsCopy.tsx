import { stats } from '@/types/types'
import { FC } from 'react'

const StatsCopy: FC<stats> = ({ route, quantity, description }) => {
  return (

    <a className="flex flex-col sm:flex-row sm:gap-1 text-center" href={route}>
      <span className="font-bold">{quantity}</span>
      <span className="text-gray-500 sm:text-gray-800">{description}</span>
    </a>
  )
}

export default StatsCopy