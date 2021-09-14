var nome = "Matheus"

var notaDoPrimeiroSemestre = 8
var notaDoSegundoSemestre = 6
var notaDoTerceiroSemestre = 5
var notaDoQuartoSemestre = 7

var notaFinal = (notaDoPrimeiroSemestre + notaDoSegundoSemestre + notaDoTerceiroSemestre + notaDoQuartoSemestre) /4

console.log("Bem vindo " + nome);
console.log("Sua nota final é " + notaFinal);

if (notaFinal >= 6) {
  console.log("Você foi aprovado!")
} else {
  console.log("Você está reprovado!")
} if (notaFinal == 10) {
  console.log("Muito bem, continue assim")
}