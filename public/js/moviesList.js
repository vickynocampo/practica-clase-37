//Microdesafio 2
//Consigna
let $body = document.querySelector('body');
let $h1 = document.querySelector('h1');

//Consigna
let modoOscuro = prompt('Desea modo Oscuro?');
if (modoOscuro) {
    $body.style.backgroundColor = ' #7f7f7'
    $body.classList.add('fondoMoviesList')
};

//Consigna
$h1.innerText = 'LISTADO PELÍCULAS';

//Consigna
$h1.style.color = 'white';
$h1.style.backgroundColor = 'teal';
$h1.style.fontSize = '20px';