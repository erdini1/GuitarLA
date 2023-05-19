import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"
import { useOutletContext } from "@remix-run/react"

export function meta() {
  return (
    [
      { title: "GuitarLa - Sobre nosotros" },
      { description: "Venta de Guitarras, blog de mucica" }
    ]
  )
}


// De esta forma agrego estilos especificos para esta pagina, en el caso en que la pagina quede en desuso puedo eliminar los stylos sin problemas
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    { /* Esto es para elementos que quiero que cargen rapido, imagenes pesadas mas que nada */
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div className="">
          <p>
            Integer eget orci egestas, interdum quam non, convallis mauris. Morbi interdum dignissim nibh, quis pretium leo rhoncus non. Donec ullamcorper arcu ligula, vitae malesuada erat commodo id. Donec vitae orci a augue semper mollis. Vestibulum sollicitudin consectetur rutrum. Duis quis laoreet velit. Sed sollicitudin vehicula neque vitae tempus. Maecenas odio ipsum, egestas vitae volutpat sit amet, vehicula ut massa.
          </p>
          <p>
            Pellentesque et felis sed urna interdum tincidunt ac at erat. Vestibulum a libero ac magna hendrerit laoreet sit amet sed erat. Morbi sit amet iaculis tellus. Maecenas commodo orci erat, sit amet finibus lectus vulputate non. Integer pretium quis ex ut scelerisque. Duis felis nulla, iaculis non sem et, congue vehicula velit. Aliquam aliquet finibus nisi et aliquam.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros