function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = "dia.png"
        document.body.style.background = "green"
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        img.src = "tarde.png"
        document.body.style.background = "grey"
    } else {
        //boa noite
        img.src = "noite.png"
        document.body.style.background = "black"
    }
}