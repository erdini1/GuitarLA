import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import styles from "~/styles/guitarras.css"

export function meta() {
  return [
    { title: "GuitarLA - Tienda" },
    { decription: "GuitarLA - Nuestra colección de Guitarras" }
  ]
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

//Desde el momento en que exporto el loader ya se manda a llamar automatico. ya sabe lo que tiene que hacer
// loader es lo que se utiliza cuando el componente carga
// Utilizamos fetch api en el loader
export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data    //Hacer commit y seguir con la siguiente parte
}

//Esto ya se ejecuta en el cliente, por eso aparece en la consola del navegador
const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoGuitarras
        guitarras={guitarras}
      />
    </main>
  )
}

export default Tienda