const pokemonCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

/* selecionando a tag com a class .imagemLOGO */
let logo = document.querySelector('.imagemLOGO');
/* selecionando a tag com a class .imagemA */
let pikachu = document.querySelector('.imagemA');
/* o método irá ser chamado ao carregara página */
function aocarregar() {
    /* Altera  o CSS fazendo com que a imagem do pikachu e do log alterem seu tamanho */
    pikachu.style.transform = 'scale(1.1)';
    logo.style.transform = 'scale(1.1)';
}
/* capturando a tag audio e colocando
-a dentro de uma variável audioFundo */
let audioFundo = document.querySelector('.audioFundo');
/* capturando a imagem do play e adicionando-a dentro de uma variável audioPlay */
let audioPlay = document.querySelectorAll('.play');

/* função que dará pause de forma automática */
function play() {
    audioFundo.play()
}
function pause() {
    audioFundo.pause()
}
/* Guarda o elemento com a classe choque na variável choque o elemento em questão é tag vídeo */
let choque = document.querySelector('.choque');
/*addEventListener irá aguardar pelo click na imagem do pikachu, qdo for detectado o click, irá mudar o display:none para display:block e assim exibir o elemento na tela. Ao final irá dar play no vídeo automaticamente.  */
pikachu.addEventListener('click', () => {
    choque.style.display = 'block'
    choque.play()
})
