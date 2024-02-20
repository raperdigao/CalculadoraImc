//IMC
//1. capturar os valores
// Função para receber os valores dos inputs e converter o mesmo para um objeto

function pegarValores() {
    // trim é para remover os espações em branco
    let nome = document.getElementById('nome').value.trim();
    let altura = parseFloat(document.getElementById('altura').ariaValueMax);
    let peso = parseFloat(document.getElementById('peso').value);

    // Transformou em objeto recebendo os dados do front end
    let dadosUsuarios = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso
    }
    return dadosUsuarios;
}
//2. Gerar a classificação do IMC
function calcular(altura, peso) {
    let imc = peso / (altura * altura)
    return imc;
}

//3. Gerar classificação do IMC

function classificacaoImc(imc) {
    if (imc < 18) {
        return "abaixo do peso"
    } else if (imc < 25) {
        return "peso normal"
    } else if (imc < 30) {
        return "sobrepeso"
    } else if (imc < 35) {
        return "obesidade 1"
    } else {
        return "obesidade 2 e 3"
    }
}
//4. Organizar as informações com a data atual
function organizarDados(dadosUsuarios, valorIMC, classificacaoImc) {
    // Capturar a data e horario do brasil
    let dataAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', dateStyle: 'short'}).format(Date.now());
    let dadosUsuarioAtt = {
        // Os tres pontos pega os dados do objeto dadosUsuarios
        // Operador Rest
        ...dadosUsuarios, 
        imc: valorIMC.toFixed(2),
        classificacao: classificacaoImc,
        dataCadastro: dataAtual
    }
    return dadosUsuarioAtt;
  }


//5. Salvar os dados em uma lista (ARRAY) -> lOCALSTORAGE
// Função responsavel para armazenar objeto dentro do local storage
function cadastrarUsuario(usuario) {
    let listaDeUsuario = []

    // Validação para verificar se eu tenho algum dado dentro do loval storage do navegador
    // Se for verdadeiro
    if (localStorage.getItem("usuariosCadastrados")) {
        listaDeUsuario = JSON.parse(localStorage.getItem
            ("usuariosCadastrados"))

    }
    // Se for falso cria um novo chave e valor
    listaDeUsuario.push(usuario)
    localStorage.setItem("usuariosCadastrados", JSON.stringify
    (listaDeUsuario))
}

//6. ler a lista com os dados (ARRAY) -> LOCALSTORAGE
//7. renderizar o conteúdo na tela
//8. botão limpar registro -> clear localstorage

