const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const fullscreen = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener("click", function() {

        const cardId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    fullscreen.classList.remove('maximize')
})

document.querySelector('.maximize-modal').addEventListener("click", function() {
    if (fullscreen.classList.contains('maximize')) {
        fullscreen.classList.remove('maximize')
    } else {
        fullscreen.classList.add('maximize')
    }
})

document.querySelector('.modal-overlay').addEventListener("click", function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.remove('active')
        modalOverlay.querySelector('iframe').src = ""
    }
})