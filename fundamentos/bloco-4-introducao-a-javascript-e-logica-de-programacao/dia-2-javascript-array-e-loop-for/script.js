let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

//exercicio 2
let result = 0;
for(let i = 0; i < numbers.length; i++){
    result += numbers[i]; 
}
console.log(result)
//exercicio 3
console.log(result/numbers.length)

//exercicio 4
if(result/numbers.length > 20){
    console.log('valor maior que 20');

}else{
    console.log('valor menor que 20')
}
//exercicio 5
let maiorNumero = numbers[0]

for(i =0;  i< numbers.length; i++){
  
    if(numbers[i] > maiorNumero){
      maiorNumero = numbers[i]
           
    }    
}  console.log(maiorNumero)



//exercicios 6
let count = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2!==0){
        count +=1
        console.log(numbers[i])
    }
}
if(count === 0){
    console.log('não tem numero impar' )
} else{
console.log (count) 
}

//exercicio 7
let menorNumero = numbers[0] 
for(i =0;  i< numbers.length; i++){
  
    if(numbers[i] < menorNumero){
      menorNumero = numbers[i]
           
    }    
}  console.log(menorNumero)


//exercicio 8

let num=[];
for(i =1; i<=25; i++){
num.push(i)
}
console.log(num)

//exercicio 9
for(i = 0; i < num.length; i++){
    console.log(num[i]/2)
}
