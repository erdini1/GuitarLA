import imagen from "../../public/img/nosotros.jpg"
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div className="">
          <p>
            Integer eget orci egestas, interdum quam non, convallis mauris. Morbi interdum dignissim nibh, quis pretium leo rhoncus non. Donec ullamcorper arcu ligula, vitae malesuada erat commodo id. Donec vitae orci a augue semper mollis. Vestibulum sollicitudin consectetur rutrum. Duis quis laoreet velit. Sed sollicitudin vehicula neque vitae tempus. Maecenas odio ipsum, egestas vitae volutpat sit amet, vehicula ut massa.
          </p>
          <p>
            Pellentesque et felis sed urna interdum tincidunt ac at erat. Vestibulum a libero ac magna hendrerit laoreet sit amet sed erat. Morbi sit amet iaculis tellus. Maecenas commodo orci erat, sit amet finibus lectus vulputate non. Integer pretium quis ex ut scelerisque. Duis felis nulla, iaculis non sem et, congue vehicula velit. Aliquam aliquet finibus nisi et aliquam. Sed id blandit ligula, et lacinia ligula. Phasellus molestie nec libero ut interdum. Vivamus pellentesque viverra lorem, sed finibus velit tempus sed. Cras tellus nunc, pretium in porttitor a, faucibus sit amet eros. Sed dapibus faucibus lacus sit amet fringilla. Donec efficitur tortor vel venenatis euismod. Nam maximus, odio at blandit bibendum, dolor nisi hendrerit lorem, vitae mollis metus orci in nunc.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros