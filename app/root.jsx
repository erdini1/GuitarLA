// En primer lugar hay que exportar la función App
export default function App(){
    return (
        <Document>
            <h1>Desde App</h1>
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <title>GuitarLA - Remix</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}