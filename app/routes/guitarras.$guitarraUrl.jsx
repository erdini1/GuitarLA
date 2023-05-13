export async function loader({ params }) {

  const { guitarraUrl } = params
  console.log(guitarraUrl)
  return {}
}

const Guitarra = () => {
  return (
    <div>Guitarra URL</div>
  )
}

export default Guitarra