import { Link } from "@remix-run/react"

const Post = ({post}) => {

    const {titulo, contenido, url, imagen, publishedAt} = post

  return (
    <article>
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{publishedAt}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`} >Leer post</Link>
        </div>
    </article>
  )
}

export default Post