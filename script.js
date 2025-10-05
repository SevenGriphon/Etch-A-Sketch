const startGridSize = 16
const container = document.querySelector(".container")
const randomColorCheck = document.querySelector(".randomize-colors")
const ProgressiveColorCheck = document.querySelector(".progressive-coloring")

function getRandomColor() {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgba(${red}, ${green}, ${blue}, 1)`
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
                div.style.background = getRandomColor()
            } else {
                div.style.background = "rgba(0, 255, 255, 1)"
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

function getRGB(color) {
    let openBracket = color.indexOf("(")
    let closeBracket = color.indexOf(")")
    let values = color.slice(openBracket+1, closeBracket).split(", ")
    return values
}

function onHover(e) {
    if (ProgressiveColorCheck.checked) {
        let color = getRGB(e.target.style.background)
        let red = color[0]
        let green = color[1]
        let blue = color[2]
        let alpha = color[3] ? color[3] : 1
        let newColor = `rgba(${red}, ${green}, ${blue}, ${alpha - 0.1})`
        e.target.style.background = newColor
    } else {
        e.target.style.background = "rgba(0, 0, 0, 0)"
    }
}

generateGrid(startGridSize)

const sizeBtn = document.querySelector(".grid-size-button")
sizeBtn.addEventListener("click", changeGridSize)