let bird = document.querySelector('.bird')

let y = 0
let v = 0

let jump = false

setInterval(() => {
    if (jump) {
        y -= v
    }    
    else {
        if (y > 800) {
            y = 800
        }
        y += 2
    }
    bird.style.top = `${y}px`
}, 1)

window.addEventListener('keypress', (event) => {
    if (jump) return
    if (event.code === 'Space') {
        jump = true
        v += 2

        setTimeout(() => {
            jump = false
            v = 0
        }, 300)
    }
})