import { RoundedThumnail } from '@/components'
import plusIcon from '../../../assets/svg/plusIcon.svg'
import { roundedThumnail } from '@/types/types'
import React from 'react'

type highlightedData = Array<roundedThumnail & { id: string, description: string }>

const highlightedData = [{
    gradient: true, imgAlt: 'code-thumbnail', imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', boxSize: 'icon', id: 'asdasd', description: 'destacados 1'
}, {
    gradient: false, imgAlt: 'code-thumbnail', imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', boxSize: 'icon', id: 'asdasd231', description: 'destacados 2'
}
    , {
    gradient: false, imgAlt: 'code-thumbnail', imgUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', boxSize: 'icon', id: 'asdasd33', description: 'destacados 3'
},

]

const Highlighted: React.FC = () => {
    return (
        <div className="flex flex-row md:justify-center max-w-2xl m-[0_auto] md:ml-10">
            <div className=" flex flex-row gap-2 max-w-full">
                {highlightedData.map((element, index) => <div key={element.id} className="flex flex-col">
                    <RoundedThumnail gradient={index === 0 ? true : element.gradient} imgAlt={element.imgAlt} imgUrl={element.imgUrl} boxSize={element.boxSize} />
                    <p className="capitalize">{element.description}</p>
                </div>
                )
                }
                {/* <RoundedThumnail gradient={false} imgAlt='PlusIcon' imgUrl={plusIcon} boxSize='icon' /> */}
            </div>
        </div>
    )
}

export default Highlighted