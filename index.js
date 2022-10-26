function changeBackgroundBody(backgroundColor){
    let body = document.querySelector('body')
    body.style.background = backgroundColor 
}

function loading() {

let hours = document.querySelector('.hours')

let img = document.querySelector('.manha')

let data = new Date()

let hora = data.getHours()
hours.innerHTML = `Agora são ${hora} horas.` 

if (hora >= 0 && hora < 12) {
    img.src = "Assets/Images/manha.jpg"
    changeBackgroundBody('#7b8c94')
} else if ( hora >= 12 && hora < 18) {
    img.src = "Assets/Images/tarde.jpg"
    changeBackgroundBody('#fea180')
} else {
    img.src = "Assets/Images/noite.jpg"
    changeBackgroundBody('#074796')
}

}

