const startGridSize = 16
const container = document.querySelector(".container")
const randomColorCheck = document.querySelector(".randomize-colors")

function getRandomColor() {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}

function generateGrid(size) {
    document.querySelectorAll(".container div").forEach((div) => {
        div.remove()
    })

    for (let y = 0; y < size; y++) {
        const row = document.createElement("div")
        row.classList.add("row")
        for (let i = 0; i < size; i++) {
            const div = document.createElement("div")
            if (randomColorCheck.checked) {
                console.log(randomColorCheck.value)
                div.style.background = getRandomColor()
            }
            div.addEventListener("mouseenter", onHover)
            row.appendChild(div)
        }
        container.appendChild(row)
    }
}

function changeGridSize(e) {
    let size = Math.min(prompt("Enter the grid size"), 100)
    
    generateGrid(size)
}

function onHover(e) {
    e.target.style.background = "rgb(0, 0 ,0)"
}

generateGrid(startGridSize)

const sizeBtn = document.querySelector(".grid-size-button")
sizeBtn.addEventListener("click", changeGridSize)