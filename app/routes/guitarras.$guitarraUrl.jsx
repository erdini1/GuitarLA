import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({ params }) {

  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  return guitarra
}

const Guitarra = () => {

  const guitarra = useLoaderData()
  console.log(guitarra.data[0].attributes.nombre)

  return (
    <div>Guitarra URL</div>
  )
}

export default Guitarra