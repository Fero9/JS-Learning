let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countSeparator = count + " - "
    saveEl.textContent += countSeparator
    reset()
}

function reset(){
    countEl.textContent = count
    count = 0
}

console.log("Let's count the number of passengers!")
