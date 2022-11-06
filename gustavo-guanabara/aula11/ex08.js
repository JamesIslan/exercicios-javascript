var vel = 90.6
console.log(`A velocidade do seu carro é ${vel} km/h`)
if (vel >= 80){
    var exced = vel - 80
    console.log(`Você ultrapassou em ${exced.toPrecision(3)}km o limite permitido, MULTADO!`)
} else {
    console.log(`Você está dentro do limite de velocidade permitido.`)
}
console.log('Digita sempre usando cinto de segurança!')