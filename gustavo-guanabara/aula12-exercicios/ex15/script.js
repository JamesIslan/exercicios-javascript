function caminhoImagem (genero, idade) {
    imgPath = ''
    switch (true) {
        case idade >= 0 && idade < 10:
            if (genero == 'Homem') {
                imgPath = 'img/crianca-menino.png'
            } else {
                imgPath = 'img/crianca-menina.png'
            }
            break
        case idade < 21:
            if (genero == 'Homem') {
                imgPath = 'img/jovem-homem.png'
            } else {
                imgPath = 'img/jovem-mulher.png'
            }
            break
        case idade < 50:
            if (genero == 'Homem') {
                imgPath = 'img/adulto-homem.png'
            } else {
                imgPath = 'img/adulta-mulher.png'
            }
            break
        case idade >= 50:
            if (genero == 'Homem') {
                imgPath = 'img/idoso.png'
            } else {
                imgPath = 'img/idosa.png'
            }
            break
    }
    return imgPath
    /*
    if (idade >= 0 && idade < 10) {
        // Criança
        if (genero == 'Homem') {
            imgPath = 'img/crianca-menino.png'
        } else {
            imgPath = 'img/crianca-menina.png'
        }
    } else if (idade < 21) {
        // Jovem
        if (genero == 'Homem') {
            imgPath = 'img/jovem-homem.png'
        } else {
            imgPath = 'img/jovem-mulher.png'
        }
    } else if (idade < 50) {
        // Adulto
        if (genero == 'Homem') {
            imgPath = 'img/adulto-homem.png'
        } else {
            imgPath = 'img/adulta-mulher.png'
        }
    } else {
        // Idoso
        if (genero == 'Homem') {
        imgPath = 'img/idoso.png'
        } else {
            imgPath = 'img/idosa.png'
        }
    }
    */
}

function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let inputAno = document.getElementById('txtano')
    let divUpdate = document.getElementById('res')
    if (inputAno.value.length == 0 || inputAno.value < 0 || inputAno.value > anoAtual) {
        alert('Você digitou um ano inválido!')
        inputAno = ""
    } else {
        let inputSexo = document.getElementsByName('radsex')
        let idade = anoAtual - Number(inputAno.value)
        let genero = ''
        let imgElement = document.createElement('img')
        let imgPath = ''
        if (inputSexo[0].checked) {
            genero = 'Homem'
        } else if (inputSexo[1].checked) {
            genero = 'Mulher'
        }
        imgPath = caminhoImagem(genero, idade)
        imgElement.setAttribute('src', imgPath)
        divUpdate.innerHTML = `Você é um/uma ${genero} com ${idade} anos`
        divUpdate.style.textAlign = "center"
        divUpdate.appendChild(imgElement)
        imgElement.style.padding = '20px'
    }
    
}