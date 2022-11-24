import React from 'react'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className="flex overflow-x-scroll snap-mandatory snap-x w-full max-w-4xl h-[50vh]">

      <div className="flex-none w-full bg-slate-500 snap-center">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-300 snap-center">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-200 snap-center">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-100 snap-center">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-600 snap-center">
        <span className="flex w-full"></span>
      </div>
      <div className="flex-none w-full  bg-slate-700 snap-center">
        <span className="flex w-full"></span>
      </div>

    </div>
  )
}

export default Stack