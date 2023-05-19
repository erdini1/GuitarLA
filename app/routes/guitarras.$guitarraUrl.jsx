import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export async function loader({ params }) {

  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada"
    })
  }

  return guitarra
}

//Una vez que loader pasa informacion este parametro de data va a estar disponible
export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ]
}

const Guitarra = () => {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className="formulario">
          <label htmlFor="">Cantidad</label>

          <select name="" id="">
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            value="Añadir al carrito"
          />

        </form>
      </div>
    </div>
  )
}

export default Guitarra