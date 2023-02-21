
import { LikeIcon } from '@/components/Icons'
import { FC, useState } from 'react'

const CommentsPublish: FC = () => {
  const [toggled, disabled] = useState<boolean>(false)
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    disabled(prev => !prev)
  }
  return (
    <div className='flex flex-row w-full justify-start gap-3 items-center'>
      <div className="flex flex-row gap-1">
        <span className="p-1 cursor-pointer" onClick={buttonHandler}>
          <LikeIcon checked={toggled} />
        </span>
        <span className="p-1 cursor-pointer" onClick={buttonHandler}>
          <LikeIcon checked={toggled} />
        </span>
        <span className="p-1 cursor-pointer" onClick={buttonHandler}>
          <LikeIcon checked={toggled} />
        </span>
      </div>
      {/* <TagIcon /> */}
    </div>
  )
}

export default CommentsPublish