let increase = document.querySelector(".increase")
let decrease = document.querySelector(".decrease")
let reset = document.querySelector(".reset")
count = 0


let number = document.querySelector(".val")


function increment (){
    count++
    number.innerHTML = count
}
function decreament(){
    count--
    number.innerHTML = count
}

function resetfn (){
    count = 0
    number.innerHTML = count
}


increase.addEventListener("click", increment)
decrease.addEventListener("click", decreament)
reset.addEventListener("click", resetfn)
