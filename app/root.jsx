import { useState } from "react"
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from "@remix-run/react"
import styles from "~/styles/index.css"
import Header from "~/components/header"
import Footer from "~/components/footer"

//Esto es el doctype de HTML, asi se importa y se utiliza mencionandolo como componente en el document
export function meta() {
    return (
        [
            { charset: "utf-8" },
            { title: "GuitarLA - Remix" },
            { name: "viewport", content: "width=device-width,initial-scale=1" }
        ]
    )
}

//Tener en cuenta que el orden importa.
// los tres ultimos links son para las fuentes de google fonts
export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

// En primer lugar hay que exportar la función App
export default function App() {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = guitarra => {
        // va a iterar sobre los elementos que hay en el carrito
        // retorna un booleando, va a iterar por sobre todas las guitarras para ver si al menos un elemento del arreglo cumpla esa condición, va a verificiar si una guitarra con ese id existe.
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    //Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrito
            setCarrito(carritoActualizado)

        } else{
            // Registro nuevo, agregar al carrito
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet 
            // Este es el context para que la info este global, siempre se pasa un objeto, se puede pasar cualquier información
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                {/* Debo poner scripts para que me tome las configuracion de react */}
                <Scripts />
                {/* LiveReload es para que se actualice automaticamnete cuando guardo */}
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores, No es la misma del video, esta es la V.2 **/
export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className="error">{error.status} {error.statusText}</p>
                <Link
                    className="error-enlace"
                    to="/"
                >
                    Talvez quieras volver a la página Principal
                </Link>
            </Document>
        )
    }
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link
                className="error-enlace"
                to="/"
            >
                Talvez quieras volver a la página Principal
            </Link>
        </Document>
    )
}

