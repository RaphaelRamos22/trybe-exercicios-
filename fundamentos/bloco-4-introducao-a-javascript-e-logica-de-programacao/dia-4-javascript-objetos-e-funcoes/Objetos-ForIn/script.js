// 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//   console.log('Bem-vinda, ' + info.personagem)
 
//   //2
 info.recorrente = "sim"
// console.log(info.recorrente)
// //3
// for(index in info){
//     console.log(index)
// }
// //4
// for(index in info){
//     console.log(info[index])
// }
// 5
let info2={
    personagem: 'tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",    
    nota: 'O último MacPatinhas',
}
for(index in info)
    console.log(info[index]+' e '+info2[index])
//6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ]
  };
 console.log("O livro favorito de" + " " +leitor.nome +" "+ leitor.sobrenome + " " +"se chama"+ ' '+leitor.livrosFavoritos[0].titulo)
 //7

 console.log(leitor.nome + " tem " + leitor['livrosFavoritos'].length +" livros favoritos ")
