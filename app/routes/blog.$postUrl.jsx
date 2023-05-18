import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"

export async function loader({ params }) {

  //se extrae la url de params
  const { postUrl } = params
  const post = await getPost(postUrl)

  if (post?.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post No encontrado"
    })
  }

  return post.data[0].attributes
}

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.titulo}` },
    { description: `Guitarras, Blog de musica, Blog ${data.titulo}` }
  ]
}

const PostUrl = () => {
  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt } = post
  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default PostUrl