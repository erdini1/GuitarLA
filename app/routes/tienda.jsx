import { getGuitarras } from "~/models/guitarras.server"

//Desde el momento en que exporto el loader ya se manda a llamar automatico. ya sabe lo que tiene que hacer
// loader es lo que se utiliza cuando el componente carga
// Utilizamos fetch api en el loader
export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras    //Hacer commit y seguir con la siguiente parte
}

const Tienda = () => {
  return (
    <div>Tienda</div>
  )
}

export default Tienda