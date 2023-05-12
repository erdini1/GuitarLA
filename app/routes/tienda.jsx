//Desde el momento en que exporto el loader ya se manda a llamar automatico. ya sabe lo que tiene que hacer
// loader es lo que se utiliza cuando el componente carga
// Utilizamos fetch api en el loader
export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  const resultado = await respuesta.json()
  console.log(resultado)
  return {}
}

const Tienda = () => {
  return (
    <div>Tienda</div>
  )
}

export default Tienda