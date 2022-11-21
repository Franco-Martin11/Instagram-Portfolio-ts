import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <article className="flex flex-col sm:order-3">
      <h1 className='font-bold'>Franco Martin</h1>
      <p className='font-normal'>I'm a developer specializing in frontend, for 1 year i've been studying in a self-taught. </p>
      <p className='font-normal mt-2'> HTML5, CSS3, Sass(.scss), JavaScript, React.js, TypeScript and others
      </p>
    </article>
  )
}

export default Description