import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import Guitarra from "~/components/guitarra"


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
      <h2 className="heading">Nuestra Collección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}

        </div>
      )}

    </main>
  )
}

export default Tienda