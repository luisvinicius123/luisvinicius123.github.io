const projetos = [
    {
        nome: "StopNow",
        descricao: "Criado como parte de atividades do curso de ADS, SENAC, StopNow é um aplicativo para reservas de estacionamento no Recife.",
        link: "https://www.figma.com/proto/ioqLEC1ShZGUMPTdEMZ8Xd/inovacaoprot?node-id=131-144&starting-point-node-id=131%3A144&mode=design&t=xnY9LrjM6vSheNfC-1",
    },
    {
        nome: "ManUp",
        descricao: "Criado como parte da residência do curso de ADS, SENAC, ManUp é uma rede social criada para tratar da saude mental masculina.",
        link: "https://www.figma.com/proto/9FNwV4CyvvU6QiI8qnsXzV/ManUp?node-id=65-4&starting-point-node-id=65%3A4&mode=design&t=917rF076bFRkhpKC-1",
    },
];

function criarElementoProjeto(projeto) {
    const elementoProjeto = document.createElement("div");
    elementoProjeto.classList.add("projeto");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.nome;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    const link = document.createElement("a");
    link.href = projeto.link;
    link.textContent = "Ver projeto";

    elementoProjeto.appendChild(titulo);
    elementoProjeto.appendChild(descricao);
    elementoProjeto.appendChild(link);

    return elementoProjeto;
}

function exibirProjetos() {
    const projetoLista = document.getElementById("projeto-lista");

    projetos.forEach((projeto) => {
        const elementoProjeto = criarElementoProjeto(projeto);
        projetoLista.appendChild(elementoProjeto);
    });
}

window.addEventListener("load", exibirProjetos);