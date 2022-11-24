import { navigationIconData } from '@/types/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'


const NavigationIcon: FC<navigationIconData> = ({ idClass, title, Icon, focus, setFocus }) => {
    return (
        <Link className='flex-1' to={`/${idClass}`}>
            <div onClick={() => setFocus(idClass)} className={`flex py-4 flex-row border-t-2 border-t-gray-100 gap-1 uppercase justify-center items-center ${idClass === focus ? 'text-indigo-800 bg-[#ecebeb] border-t-gray-300' : 'text-gray-600'} hover:text-indigo-500 cursor-pointer`}>
                <>{Icon}</>
                <h4 className='hidden sm:flex font-semibold text-xs'>{title}</h4>
            </div>
        </Link>
    )
}

export default NavigationIcon