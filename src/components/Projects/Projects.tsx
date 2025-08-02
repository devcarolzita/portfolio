import BorderButton from '../BorderButton'
import { data } from '../data/data'
import Project from './Project'

const Projects = () => {
  return (
    <div className='flex flex-col items-center gap-5' id='projects'>
      <div>
      <BorderButton  text='Projetos'/>
      </div>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Projetos em destaques 
      </h2>
      <p className='text-zinc-400 leading-relaxed"'>Confira alguns dos nossos projetos e colaborações recentes.
      </p>
      <div className='flex gap-10 flex-wrap'>
        {data.map(({projectName, description, tags, imgSource, demo, github}) => <Project projectName={projectName} description={description}  tags={tags} imgSource={imgSource} demo={demo} github={github} key={projectName}/>)}
      {/* <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project /> */}
      </div>
      </div>
  )
}

export default Projects