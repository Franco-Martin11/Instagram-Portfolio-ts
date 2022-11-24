import { RestoreIcon } from '@/components'
import useBodyScrollLock from '@/hook/useBodyScrollLock'
import { Image } from '@/types/types'
import { FC } from 'react'
import ProjectModal from './ProjectModal'

const ProjectCard: FC<Image> = ({ imgUrl, imgAlt, slides }) => {
  const { isLocked, handleToggle } = useBodyScrollLock()
  return (
    <div className="">
      <div onClick={handleToggle} className="cursor-pointer bg-slate-500 w-full h-full aspect-square relative snap-center">
        {slides &&
          <span onClick={(event) => {
            event.stopPropagation()
            alert('hola es bueno')
          }} className="absolute top-3 right-3">
            <RestoreIcon />
          </span>
        }
        <img src={imgUrl} className="w-full h-full object-cover" alt={imgAlt} loading='lazy' />
      </div>
      {isLocked && <ProjectModal handleToggle={handleToggle} imgAlt={imgAlt} imgUrl={imgUrl} slides={slides} />}
    </div>
  )
}

export default ProjectCard