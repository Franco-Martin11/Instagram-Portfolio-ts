import { FC } from 'react'
import { StatsCopy } from '@/components'
import { stats } from '@/types/types'

const dataStats: Array<stats> = [{
  route: '/asd',
  quantity: 12,
  description: 'projects'

},
{
  route: '/asd',
  quantity: 9,
  description: 'technologies'

},
{
  route: '/asd',
  quantity: 4,
  description: 'tools'
},]

const Stats: FC = () => {
  return (
    <div className="flex flex-row gap-2 order-3 sm:order-2 border-y px-4 border-gray-200 sm:border-none sm:px-0 sm:py-0 py-4 md:gap-8 items-center justify-between text-center flex-wrap sm:flex-nowrap">
      {dataStats.map(element => <StatsCopy key={element.quantity} route={element.route} quantity={element.quantity} description={element.description} />)}
    </div>
  )
}

export default Stats