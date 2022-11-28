// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        console.log(data)
    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.


let elementoPai = document.querySelector(".card")
        let user = dados.results[0];
        let cardElements = `
        <img src="${user.picture.large}" alt="foto de usuario">
        <h2>${user.name.first} ${user.name.last}</h2>
        <h3>e-mail: ${user.email}</h3>
        <h4>senha: ${user.login.password}</h3>
        `
        elementoPai.innerHTML = cardElements
}



/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

btnRandom = document.getElementById('random');
btnRandom.addEventListener('click', evento => {
    evento.preventDefault();
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        renderizarDadosUsuario(data)
        console.log(data)
    });
})