import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import stylesGuitarras from "~/styles/guitarras.css"

export function meta() {
  return [

  ]
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    }
  ]
}
export async function loader() {

  //Esto es para que las consultas inicien al mismo tiempo, de la ootra forma se iba a ejecutar primero una y luego la otra.
  //Esto mejora el rendimiento
  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}

function Index() {

  const { guitarras, posts } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        {/* lo hice componente xq se repite */}
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>
    </>
  )
}

export default Index