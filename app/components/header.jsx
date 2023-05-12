import { Link } from "@remix-run/react"
const Header = () => {
    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="logo">

                </div>
                <nav className="navegacion">
                    {/* Se usa link para navegar de una manera mas rapida que con "a" */}
                    <Link
                        to={"/"}
                    >
                        Inicio
                    </Link>
                    <Link
                        to={"/nosotros"}
                    >
                        Nosotros
                    </Link>
                    <Link
                        to={"/tienda"}
                    >
                        Tienda
                    </Link>
                    <Link
                        to={"/blog"}
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header