// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = (prompt('Qual a altura?'))
  largura = (prompt('Qual a largura?'))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = (prompt('Qual ano atual?'))
  anoNascimento = (prompt('Qual ano de nascimento?'))
  const idade = anoAtual - anoNascimento
  console.log(idade)  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura*altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = (prompt('Qual seu nome?'))
  idade = Number (prompt('Qual sua idade?'))
  email = (prompt('Qual seu email?'))

  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {

  const coresFavoritas = [cor1 = (prompt('Qual sua primeira cor favorita?', )) , cor2 = (prompt('Qual sua segunda cor favorita?')), cor3 = (prompt('Qual sua terceira cor favorita?')) ]

console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const ingressosParaVender = custo / valorIngresso
return ingressosParaVender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

const TamanhoIgual = Boolean (string1.length === string2.length)

return TamanhoIgual
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

return(array[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length-1]
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

const primeiroNumero = array[0]
const ultimoNumero= array[array.length-1]

array[0] = ultimoNumero
array[array.length-1]= primeiroNumero
return array

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   const eIgual = string1.toUpperCase() === string2.toUpperCase()

  return eIgual 
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRG) {
  anoAtual = Number (prompt('Qual ano atual?'))
  anoNascimento = Number(prompt('Qual ano nascimento?'))
  anoEmissaoRG = Number (prompt('Qual ano de emissão do RG?'))
  
  const idade = anoAtual - anoNascimento
  
  const anosRg = Number (anoAtual - anoEmissaoRG)
  
  const operacao1 = Boolean (idade <= 20 && anosRg >=5) 
  const operacao2 = Boolean ((idade > 20 && idade < 50) && anosRg >=10)
  const operacao3 = Boolean  (idade > 50 && anosRg >15) 
  
  
   const precisaRenovar = (operacao1 || operacao2 || operacao3)
  console.log(precisaRenovar)
  }


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
return (ano%400==0) || (ano%4==0) && (ano % 100 != 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const  eDeMaior = (prompt('Você tem mais de 18 anos?'))
 const   possuiEnsinoMedio= (prompt('Você possui ensino médio completo?'))
 const   temDisponibilidade= (prompt('Você possui disponibilidade exclusiva durante os horários do curso'))

  const estudanteValido =  eDeMaior === 'sim' && possuiEnsinoMedio === 'sim' && temDisponibilidade === 'sim'
  console.log(estudanteValido)

}