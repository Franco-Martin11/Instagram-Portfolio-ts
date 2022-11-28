import { PublishData } from '@/constant/PublishData'
import React from 'react'
import ProjectCard from './Components/ProjectCard'

type Props = {}

const Projects = (props: Props) => {

  return (
    <div className='grid-template bg-[#fafafa] min-h-[50vh]'>
      {PublishData.map((element, index) => <ProjectCard key={element.id + index} id={element.id} imgAlt={element.imgAlt} imgUrl={element.imgUrl} slides={element.slides} />)}
    </div>
  )
}

export default Projects