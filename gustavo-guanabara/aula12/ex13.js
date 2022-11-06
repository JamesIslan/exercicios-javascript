var agora = new Date()
diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('Hoje é um Domingo')
        break
    case 1:
        console.log('Hoje é uma Segunda-Feira')
        break
    case 2:
        console.log('Hoje é uma Terça-Feira')
        break
    case 3:
        console.log('Hoje é uma Quarta-Feira')
        break
    case 4:
        console.log('Hoje é uma Quinta-Feira')
        break
    case 5:
        console.log('Hoje é uma Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('Dia inválido')
        break
}