const apiKey = 'bddd3986fbdb61de062d83792dd2e750';

function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados= JSON.parse (this.responseText);
    for (i=0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = noticia.publishedAt;

        texto = texto + ` 
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.TolocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content}<a href="${noticia.url}">Leia mais </a>
                <span>
            </div>
        `;
    };

    divTela.innerHTML = texto
}

function executaPesquisa () {
    let query = document.getElementById('pesquisa').value;

    alert('funciona')

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?query=hardware&api_key=cc4b67c52acb514bdf4931f7cedfd12b`);
    xhr.send
}

document.getElementById ('botaopesquisa').addEventListener ('click', executaPesquisa);