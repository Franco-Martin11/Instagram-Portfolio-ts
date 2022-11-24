import React from 'react'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className="flex overflow-x-scroll snap-x w-full snap-proximity max-w-4xl h-[50vh]">

      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-500 snap-always">
        <span className="flex w-full"></span>
      </div>

    </div>
  )
}

export default Stack