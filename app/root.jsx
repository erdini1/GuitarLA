import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from "@remix-run/react"
import styles from "~/styles/index.css"
import Header from "~/components/header"

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
    return (
        <Document>
            <Outlet />
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
                {/* Debo poner scripts para que me tome las configuracion de react */}
                <Scripts />
                {/* LiveReload es para que se actualice automaticamnete cuando guardo */}
                <LiveReload/>
            </body>
        </html>
    )
}