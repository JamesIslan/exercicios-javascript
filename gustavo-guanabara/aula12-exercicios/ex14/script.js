function carregar() {
    var div_horario = window.document.getElementById('horario')
    var div_imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora_sistema = data.getHours()
    div_horario.innerHTML = `São exatamente ${hora_sistema} horas`
    if ( hora_sistema >= 6 && hora_sistema < 12) {
        div_imagem.src = './img/manha.png'
        document.body.style.background = '#fee684'
    } else if (hora_sistema >= 12 && hora_sistema < 18) {
        div_imagem.src = './img/tarde.png'
        document.body.style.background = '#f5ae65'
    } else if (hora_sistema >= 18 || ( 0 < hora_sistema <6)) {
        div_imagem.src = './img/noite.png'
        document.body.style.background = '#223438'
    }
}

