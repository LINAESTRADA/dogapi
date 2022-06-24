async function perrito() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson =  await response.json();
    var img = responseJson.message; /* url de la imagen del perrito aqui es para desplegar la imagen*/
    var contenedorPerrito = document.querySelector(".contenedorPerrito"); // aqui estamos juntando o cantenando la variable imagen
    contenedorPerrito.innerHTML = "<img src='" +img + "' alt='perrito' />"; /*aqui estamos creando  la imagen*/

}