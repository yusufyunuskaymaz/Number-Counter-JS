const number = document.querySelector(".number")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const button4 = document.querySelector(".button4")
const button5 = document.querySelector(".button5")
const main = document.querySelector(".main")
const savedList = document.querySelector(".savedList")


// console.log(button5)


main.addEventListener("click", changeColor)

function changeColor(){
    
    if(number.textContent > 0){
        number.style.color = "green"
    }else if(number.textContent < 0){
        number.style.color = "red"
    }else{
        number.style.color = "grey"
    }
}

button1.addEventListener("click", increase)

function increase() {

   number.textContent++

}

button2.addEventListener("click", decrease)

function decrease() {

    number.textContent--

}

button3.addEventListener("click", reset)

function reset(){
    
    number.textContent = "0"

}

button4.addEventListener("click", addNumberToUI)

function addNumberToUI(){

    const newList = document.createElement("li")
    newList.className = "numberList"

    newList.textContent = number.textContent

    savedList.appendChild(newList)

    console.log(newList)
  
}

button5.addEventListener("click", deleteAllFromUI)

function deleteAllFromUI(){

   if(confirm("Are You Sure")){
       console.log("evet")
       savedList.textContent = ""
   }

}

