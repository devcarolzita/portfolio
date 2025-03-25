import { typeTitle } from "../types/types"

const Title = ({title, subTitle} : typeTitle) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title} <span className="text-purple-700">{subTitle}</span></h2>  )
}

export default Title