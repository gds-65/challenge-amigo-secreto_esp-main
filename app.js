// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let misAmigos = []

function limpiarEntrada() {
    document.querySelector('#amigo').value = '';
}


function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        misAmigos.push(nombreAmigo);
        console.log(misAmigos);

        limpiarEntrada();
        actualizarLista();
        return;

    }

}

function actualizarLista() { // 1. Obtener la lista

    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente

    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo y agregar elementos

    for (let i = 0; i < misAmigos.length; i++) {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = misAmigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista

    }


}



function sortearAmigo() {
    if (misAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let indice = Math.floor(Math.random() * misAmigos.length);
    let amigoSorteado = misAmigos[indice];
    let amigoGanador = document.getElementById('resultado');
    amigoGanador.innerHTML = `El Amigo Secreto Sorteado Es: ${amigoSorteado}`;

}