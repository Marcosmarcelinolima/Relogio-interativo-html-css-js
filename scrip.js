function carregar() {
    var mensagem = document.getElementById('horario')
    var imagem = document.getElementById('img1')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas!`
        if (hora >=0 && hora < 12 ){
            imagem.src = "pexels-kehn-hermano-4121708.jpg"
        } else if(hora >=12 && hora < 18){
            imagem.src="pexels-anderson-martins-2386144.jpg"
        } else if(hora >18 ){
            imagem.src="pexels-pixabay-414144 (1).jpg"
        }
}
