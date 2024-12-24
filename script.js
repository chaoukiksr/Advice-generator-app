let quoteText = document.getElementById("quoteText")
let btn = document.getElementById("btn")
let number = document.getElementById('number')
const generateAdvice = async () =>{
   await fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
      quoteText.innerHTML = `	&ldquo;${data.slip.advice
      }&rdquo;`
      number.innerHTML = data.slip.id
   })
} 

btn.addEventListener("click", generateAdvice)

