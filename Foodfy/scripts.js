const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click", function() {

        const cardId = card.getAttribute('id')
        const cardTitle = card.querySelector('.title-string').innerHTML
        const cardAuthor = card.querySelector('.author-string').innerHTML
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `${cardId}`
        modalOverlay.querySelector('.title-modal').innerHTML = `${cardTitle}`
        modalOverlay.querySelector('.author-modal').innerHTML = `${cardAuthor}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
})

document.querySelector('.modal-overlay').addEventListener("click", function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.remove('active')
        modalOverlay.querySelector('img').src = ""
    }
})