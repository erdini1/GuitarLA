// Al utulizar nested routes este archivo de blog ahora funiona como LAYOUT

import { Outlet } from "@remix-run/react"
import styles from "~/styles/blog.css"

// los links si quedan porque se van a aplizar a blog-index y a blog-url
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

const Blog = () => {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}

export default Blog