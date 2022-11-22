import { navigationIconData } from '@/types/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'


const NavigationIcon: FC<navigationIconData> = ({ idClass, title, Icon, focus, setFocus }) => {
    return (
        <Link to={`/${idClass}`}>
            <div onClick={() => setFocus(idClass)} className={`flex flex-row gap-1 uppercase items-center ${idClass === focus ? 'text-indigo-500' : 'text-gray-600'} hover:text-indigo-500 cursor-pointer`}>
                <>{Icon}</>
                <h4 className='hidden sm:flex font-semibold text-xs'>{title}</h4>
            </div>
        </Link>
    )
}

export default NavigationIcon