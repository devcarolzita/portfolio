import React from 'react'
import BorderButton from '../BorderButton'
import Project from './Project'

const Projects = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div>
      <BorderButton  text='Projetos'/>
      </div>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Projetos em destaques 
      </h2>
      <p className='text-zinc-400 leading-relaxed"'>Confira alguns dos meus projetos e colaborações recentes.
      </p>
      <div className='flex gap-10 flex-wrap'>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      </div>
      </div>
  )
}

export default Projects