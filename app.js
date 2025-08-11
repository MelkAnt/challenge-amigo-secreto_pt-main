// Cria um array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação: campo vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona ao array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    
    // Limpa a lista atual
    lista.innerHTML = '';

    // Adiciona cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const loading = document.getElementById('loading');

    if (amigos.length === 0) {
        resultado.innerHTML = 'Nenhum amigo na lista para sortear.';
        return;
    }

    // Mostra o loading e limpa o resultado anterior
    loading.style.display = 'inline-block';
    resultado.innerHTML = '';

    // Simula um tempo de processamento (ex: 1.5s)
    setTimeout(() => {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const nomeSorteado = amigos[indiceSorteado];

        // Esconde o loading e mostra o resultado
        loading.style.display = 'none';
        resultado.innerHTML = `O amigo sorteado foi: ${nomeSorteado}`;
    }, 1500);
}