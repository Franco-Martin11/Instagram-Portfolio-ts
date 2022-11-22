import { RestoreIcon } from '@/components'
import { Image } from '@/types/types'
import { FC } from 'react'

const ProjectCard: FC<Image> = ({ imgUrl, imgAlt, slides }) => {
  return (
    <div className="bg-slate-500 w-full h-full aspect-square relative">
      {slides &&
        <span onClick={() => alert('hola es bueno')} className="absolute top-3 right-3">
          <RestoreIcon />
        </span>
      }
      <img src={imgUrl} className="w-full h-full object-cover" alt={imgAlt} loading='lazy' />
    </div>
  )
}

export default ProjectCard