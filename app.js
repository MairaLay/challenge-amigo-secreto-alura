let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    document.getElementById('resultado').innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
}



