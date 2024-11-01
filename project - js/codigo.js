const container = document.getElementById("container");

let atleta;

let conteudo = ' ';

const montaCard = (atleta) => `
    <article>
        <h1>${atleta.nome}</h1>
        <img src='${atleta.imagem}'>
        <p>${atleta.detalhes}</p>
    </article>
`;

dados.forEach(
    (ele) => conteudo += montaCard(ele)
)

container.innerHTML = conteudo;

