const Curso = ({ curso }) => {

    const { titulo, contenido, imagen } = curso

    return (
        <section className="curso">
            {/* Sintaxis especial de JSX. Como no hay forma de que la hoja de estilos consuma una api, se debe hacer de esta forma. Asi de puede escribir el codigo css tomando esa imagen */}
            <style jsx="true">{`
                .curso{
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url});
                }
            `}</style>

            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </section>
    )
}

export default Curso