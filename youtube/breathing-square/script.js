const canvas = document.getElementById('breathingSquare')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let size = 100
const maxSize = 200
const minSize = 100

const inhaleDuration = 4000 // 4 seconds
const holdDuration = 4000 // 4 seconds
const exhaleDuration = 4000 // 4 seconds

let state = "inh" // "inh", "holding", "exh"
let startTime
let currentTime
let text = "вдох"

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#61dafb'
    ctx.fillRect(
        canvas.width / 2 - size / 2,
        canvas.height / 2 - size / 2,
        size,
        size
    )

    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)
}

function updateSize(progress) {
    switch (state) {
        case "inh":
            size = minSize + (maxSize - minSize) * progress
            break
        case "exh":
            size = maxSize - (maxSize - minSize) * progress
            break
    }
}

function animate() {
    currentTime = new Date().getTime()
    let elapsedTime = currentTime - startTime

    let progress
    switch (state) {
        case "inh":
            progress = elapsedTime / inhaleDuration
            if (progress >= 1) {
                progress = 1
                state = "holding1"
                startTime = new Date().getTime()
                text = "задержка"
            }
            break
        case "holding1":
            if (elapsedTime >= holdDuration) {
                state = "exh"
                startTime = new Date().getTime()
                text = "выдох"
            }
            break
        case "exh":
            progress = elapsedTime / exhaleDuration
            if (progress >= 1) {
                progress = 1
                state = "holding2"
                startTime = new Date().getTime()
                text = "задержка"
            }
            break
        case "holding2":
            if (elapsedTime >= holdDuration) {
                state = "inh"
                startTime = new Date().getTime()
                text = "вдох"
            }
            break
    }

    if (state === "inh" || state === "exh") {
        updateSize(progress)
    }

    drawSquare()
    requestAnimationFrame(animate)
}

function startAnimation() {
    startTime = new Date().getTime()
    animate()
}

startAnimation()
