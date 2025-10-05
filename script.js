const container = document.querySelector(".container")

function onHover(e) {
    e.target.classList.add("on")
}

for (let y = 0; y < 16; y++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div")
        div.addEventListener("mouseenter", onHover)
        row.appendChild(div)
    }
    container.appendChild(row)
}