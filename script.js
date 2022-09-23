var square = document.querySelector('#div');
var input = document.querySelector('#countries');
var teste = document.querySelector('#teste');

function enviar(){
    value = input.value.toLowerCase()
    switch (value){
        case 'default':
            square.style.backgroundImage = ''
            break
        case 'brasil':
            square.style.backgroundImage = 'url(imgs/br.jpg)'
            break
        case 'argentina':
            square.style.backgroundImage = 'url(imgs/ar.jpg)'
            break
        case 'colombia':
            square.style.backgroundImage = 'url(imgs/co.jpg)'
            break
        case 'venezuela':
            square.style.backgroundImage = 'url(imgs/ve.jpg)'
            break
        case 'chile':
            square.style.backgroundImage = 'url(imgs/ch.jpg)'
            break
        case 'uruguai':
            square.style.backgroundImage = 'url(imgs/ur.jpg)'
            break
        case 'paraguai':
            square.style.backgroundImage = 'url(imgs/pr.jpg)'
            break
        case 'peru':
            square.style.backgroundImage = 'url(imgs/pe.jpg)'
            break
        case 'equador':
            square.style.backgroundImage = 'url(imgs/eq.jpg)'
            break
        case 'bolivia':
            square.style.backgroundImage = 'url(imgs/bo.jpg)'
    }
    
}

