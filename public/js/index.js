//Microdesafio 1
//Consigna
let $container = document.querySelector('.container');
$container.style.display = 'block';

//Consigna
let $main = document.querySelector('main');
let $h2 = document.querySelector('h2');
let $a = document.querySelector('a');
let $p = document.querySelectorAll('p');

//Consigna
let nombreUsuario = prompt('Ingrese su nombre');
if (!nombreUsuario) {
    $h2.innerText += ' Invitado'
} else {
    $h2.innerText += ' ' + nombreUsuario
}
//Consigna
$h2.style.textTransform = 'uppercase';

//Consigna
$a.style.color = '#E51B3E'

//Consigna
let confirmColorFondo = confirm('Desea cambiar el color de fondo?');
if(confirmColorFondo){
    let $body = document.querySelector('body');
    $body.classList.add('fondo');
}

//Consigna
for(let i = 0; i < $p.length; i++){
    if(i % 2 == 0 ){
        $p[i].classList.add('destacadoPar');
    }else{
        $p[i].classList.add('destacadoImpar');
    }
}

//Consigna
$main.style.display = 'block';