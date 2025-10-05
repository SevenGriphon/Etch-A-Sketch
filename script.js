const startGridSize = 16
const container = document.querySelector(".container")

function generateGrid(size) {
    document.querySelectorAll(".container div").forEach((div) => {
        div.remove()
    })

    for (let y = 0; y < size; y++) {
        const row = document.createElement("div")
        row.classList.add("row")
        for (let i = 0; i < size; i++) {
            const div = document.createElement("div")
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
    e.target.classList.add("on")
}

generateGrid(startGridSize)

const sizeBtn = document.querySelector(".grid-size-button")
sizeBtn.addEventListener("click", changeGridSize)