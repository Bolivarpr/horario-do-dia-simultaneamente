function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =  `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'img/manha.png'
        document.body.style.background = '#eddab6'
    }else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#e5880d'
    }else{
        //Boa Noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#223a44'
    }
}
