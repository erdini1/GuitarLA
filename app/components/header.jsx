import { Link, useLocation } from "@remix-run/react"
import logo from "../../public/img/logo.svg"

const Header = () => {

    // Esto lo hacemos para resaltar en la pagina en que estamos dentro de header
    const location = useLocation()
    console.log(location)

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to={"/"}>
                    <img  className="logo" src={logo} alt="Imagen logo" />
                </Link>
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
            </div>
        </header>
    )
}

export default Header