import { typeButton } from "../types/types"

const BorderButton = ({text}: typeButton) => {
  return (
    <div className='rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[2px]'>
    <p className='rounded-full bg-black px-4 py-1.5 text-sm font-medium'>{text}</p>
  </div>
  )
}

export default BorderButton