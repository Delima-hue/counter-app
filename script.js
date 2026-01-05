let count = 0
let counttext = document.getElementById("counter-text")
let  increasebtn = document.getElementById("increase-btn")
let clickedbtn = document.getElementById("button-clicked")
let lasttask = document.getElementById("last-task")

increasebtn.addEventListener("click",function(){
    count = count + 1
    counttext.textContent = count
    clickedbtn.textContent = "increase button clicked"
    console.log("increased")
}
)

let decreasebtn = document.getElementById("decrease-btn")
decreasebtn.addEventListener("click", function (){
if (count > 0) {
    count = count - 1
} 
else{
    count == 0
}
 counttext.textContent = count
 clickedbtn.textContent = "decrease button clicked"
 console.log("decrease")
}
)
let resetbtn =   document.getElementById("Reset-btn")
resetbtn.addEventListener("click",function(){
    count = 0
    counttext.textContent = count
    clickedbtn.textContent = "reset button clicked"
    console.log("reset")
})

let firsttask = document.getElementById("task1")
firsttask.addEventListener("click", function(){
    count = count + 2
    counttext.textContent = count
    clickedbtn.textContent = "increase by 2"
    console.log("firsttask")
})

lasttask.addEventListener("click", function(){
    count = 10
    counttext.textContent = count
    clickedbtn.textContent = "To 10"
})


