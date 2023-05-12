import { Link, useLocation } from "@remix-run/react"
const Navegacion = () => {

    // Esto lo hacemos para resaltar en la pagina en que estamos dentro de header
    const location = useLocation()

    return (
        <nav className="navegacion">
            {/* Se usa link para navegar de una manera mas rapida que con "a" */}
            <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : ""}
            >
                Inicio
            </Link>
            <Link
                to={"/nosotros"}
                className={location.pathname === "/nosotros" ? "active" : ""}
            >
                Nosotros
            </Link>
            <Link
                to={"/tienda"}
                className={location.pathname === "/tienda" ? "active" : ""}
            >
                Tienda
            </Link>
            <Link
                to={"/blog"}
                className={location.pathname === "/blog" ? "active" : ""}
            >
                Blog
            </Link>
        </nav>
    )
}

export default Navegacion