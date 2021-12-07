function append(elementoPai, elementoFilho, classes){
    let child = document.createElement(elementoFilho)
    child.className = classes
    let pai = document.querySelector(elementoPai)
    pai.appendChild(child)
}
append("body", "h1", "title")
document.querySelector("h1").innerText = "Trybe"
append("body", "main", "main-content")
append("main", "section", "center-content")
append("section", "p")
document.querySelector("p").innerText= "melhor escola de tecnologia do Brasil"
append("main", "section", "left-content");
append("main", "section", "ringht-content")
append(".left-content", "img", "small-imagem" )
document.querySelector("img").src="https://picsum.photos/200"
append(".ringht-content", "ul") 
 let array = ["um", "dois", "tres", "quatro", "cinto"]
 let pai = document.querySelector("ul")
 for(index in array){
   let filho = document.createElement("li")
   filho.innerText = array[index]
   pai.appendChild(filho)

 }
 