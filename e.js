// Ex. 01
let nome = "joão"
console.log (nome)

//Ex. 02
let
a = 5
b = 10
console.log ()

//Ex. 03
let priemeironome = "Jose" 

let ultimo = "Silva"

console.log ( priemeironome, ultimo)

//Ex. 04.1
let pessoa = {

    nome: "Deyeverson",

    idade: "17",

    email: "deydey@gmail.com",

    telefone: "10230213"
};

console.log(pessoa);

//Ex. 04.2
let frutas = ['maçã', 'banana','açaí']
frutas.push('uva')
console.log(frutas)

//Ex. 05
let numeros = [1, 2, 3, 4, 5];
console.log("Primeiro elemento:", numeros[0]);

console.log("Último elemento:", numeros[numeros.length - 1]);

//Ex. 06
let cores = ['vermelho', 'verde', 'azul'];
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

//Ex. 07
let idade = 20;
console.log(idade);

if (idade < 18) {
    console.log("menor de idade");
} else {
    console.log("maior de idade");
}
//Ex. 08
let nota = 10;

if (nota >= 7) {
    console.log('Aprovado');
} else if (nota > 5 && nota < 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
//Ex. 09
let diaDaSemana = 3

switch(diaDaSemana){

case 1:
    console.log ("Domingo");
break;

case 2:
    console.log ("Segunda-feira");
break;

case 3:
    console.log ("Terça-feira");
break;

case 4:
    console.log ("Quarta-feira");
break;

case 5:
    console.log ("Quinta-feira");
break;

case 6:
    console.log ("Sexta-feira")
break;

case 7:
    console.log ("Sabado")
break;

 default:
    console.log("Valor inválido para dia da semana");
}
//Ex. 10
for (i=1; i<= 10; i++){
    console.log(i);
}
//Ex. 11
let contador =1 
while (contador <=5) {
    console.log (contador)
    contador++
}
//Ex. 13
let valores = [10, 20, 30, 40, 50];
    let soma = 0;
    
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    
    console.log("A soma é:", soma);
//Ex. 14
let vetor = [10, 5, 20, 8, 15];

let maior = 0;
let n = 0;

while (n < vetor.length) {
    if (vetor[n] > maior) {
        maior = vetor[n];
    }
    n++;
}

console.log("Ex. 14: O maior número é ", maior);

//Ex. 17

//Ex. 19
let texto = "Momani";
let textoInvertido = "";
for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log("Texto invertido:", textoInvertido);
