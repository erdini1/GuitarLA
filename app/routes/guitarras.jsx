import { Outlet } from "@remix-run/react"
import styles from "~/styles/guitarras.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

const Tienda = () => {
  return (
    <main className="contenedor">
      {/* Este outlet inyecta lo que esta en guitarras._index.jsx, por lo que aca no necesitariamos utilizar los loaders y demas */}
      <Outlet/>
    </main>
  )
}

export default Tienda