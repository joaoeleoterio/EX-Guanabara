function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var FAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (FAno.value.length == 0 || Number(FAno.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente de novo.")
    } else {
        var fsex = document.getElementsByName ("radsex")
        var idade = ano - Number(FAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute("src" , "foto-bebe-m.png")
            } else if ( idade <= 21) {
                //Jovem
                img.setAttribute("src" , "foto-jovem-m.png")
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src" , "foto-adulto-m.png")
            } else {
                //Idoso
                img.setAttribute("src" , "foto-idoso-m.png")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade< 14) {
                //Criança
                img.setAttribute("src" , "foto-bebe-f.png")
            } else if ( idade <= 21) {
                //Jovem
                img.setAttribute("src" , "foto-jovem-f.png")
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src" , "foto-adulto-f.png")
            } else {
                //Idoso
                img.setAttribute("src" , "foto-idoso-f.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}