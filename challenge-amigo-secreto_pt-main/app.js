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

    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        resultado.innerHTML = 'Nenhum amigo na lista para sortear.';
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado
    resultado.innerHTML = `O amigo sorteado foi: ${nomeSorteado}`;
}