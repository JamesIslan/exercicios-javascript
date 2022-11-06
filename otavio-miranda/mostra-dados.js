const nome = 'Joamerson'
const sobrenome = 'Islan'
var ano_atual = new Date().getFullYear()
var idade = 16
var pesoKg = 56
var alturaMetros = 1.70
var imc = pesoKg / (alturaMetros ** 2)
const ano_nasc = ano_atual - idade

console.log(`${nome} ${sobrenome}, você nasceu em ${ano_nasc}, tem ${pesoKg}Kg e ${alturaMetros.toPrecision(3)} de altura.
seu IMC é de ${imc.toPrecision(4)}
`)