import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import Curso from "~/components/curso"
import ListadoPosts from "~/components/listado-posts"
import stylesGuitarras from "~/styles/guitarras.css"
import stylesCurso from "~/styles/curso.css"
import stylesPosts from "~/styles/blog.css"

export function meta() {
  return [
    {title: "GuitarLa - Inicio"},
    {description: "GuitarLA - Tienda de guitarras, blog de musica, cursos"}
  ]
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesCurso
    },
    {
      rel: "stylesheet",
      href: stylesPosts
    }
  ]
}
export async function loader() {

  //Esto es para que las consultas inicien al mismo tiempo, de la ootra forma se iba a ejecutar primero una y luego la otra.
  //Esto mejora el rendimiento
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {

  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        {/* lo hice componente xq se repite */}
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso.attributes}
      />

      <section className="contenedor">
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index