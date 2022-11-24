import { RestoreIcon } from '@/components'
import useBodyScrollLock from '@/hook/useBodyScrollLock'
import { Image } from '@/types/types'
import { FC } from 'react'

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
      {isLocked && <div onClick={handleToggle} className="w-full min-h-screen fixed top-0 left-0 z-10 grid place-items-center bg-[rgba(0,0,0,0.83)]">
        <img src={imgUrl} alt={imgAlt} loading='lazy' className='aspect-square object-cover w-96 h-96 bg-slate-600' />
      </div>}
    </div>
  )
}

export default ProjectCard