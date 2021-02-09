const cards = document.querySelectorAll('.card')

const addButtonIngredientCreate = document.querySelectorAll('.addIngredientCreate')
const addStepIngredientCreate = document.getElementById('addStepIngredientCreate')

const addButtonIngredient = document.querySelectorAll('.addIngredient')
const addStepIngredient = document.getElementById('addStepIngredient')

const addButtonPreparationCreate = document.querySelectorAll('.addPreparationStepsCreate')
const addStepPreparationCreate = document.getElementById('addStepPreparationCreate')

const addButtonPreparation = document.querySelectorAll('.addPreparationSteps')
const addStepPreparation = document.getElementById('addStepPreparation')

const buttonIngredients = document.querySelectorAll('.button_ingredients')
const buttonsPreparation = document.querySelectorAll('.button_prepation')
const buttonInformation = document.querySelectorAll('.button_information')

const info_ingredients = document.querySelectorAll('.info_ingredients')
const info_preparation = document.querySelectorAll('.info_preparation')
const info_information = document.querySelectorAll('.info_information')

for (let i = 0; i < addButtonIngredientCreate.length; i++) {
    addButtonIngredientCreate[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'ingredients')
        input.setAttribute('placeholder', 'Type another one here.')

        addStepIngredientCreate.append(input)
    })
}

for (let i = 0; i < addButtonIngredient.length; i++) {
    addButtonIngredient[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'ingredients')

        addStepIngredient.append(input)
    })
}

for (let i = 0; i < addButtonPreparationCreate.length; i++) {
    addButtonPreparationCreate[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'preparation')
        input.setAttribute('placeholder', 'Type another one here.')

        addStepPreparationCreate.append(input)
    })
}

for (let i = 0; i < addButtonPreparation.length; i++) {
    addButtonPreparation[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'preparation')

        addStepPreparation.append(input)
    })
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {

        window.location.href = `/recipes/${i}`
    })
}

for (let i = 0; i < buttonIngredients.length; i++) {
    buttonIngredients[i].addEventListener("click", function() {

        if (buttonIngredients[i].textContent == "Show") {
            buttonIngredients[i].textContent = "Hide"
            info_ingredients[i].classList.remove("hide")
            info_ingredients[i].classList.add("show")
            info_ingredients[i].innerHTML = textVarIngredients
        }
        else {
            buttonIngredients[i].textContent = "Show"
            info_ingredients[i].classList.remove("show")
            info_ingredients[i].classList.add("hide")
            textVarIngredients = info_ingredients[i].innerHTML
            info_ingredients[i].innerHTML = ""
        }
    })
}

for (let i = 0; i < buttonsPreparation.length; i++) {
    buttonsPreparation[i].addEventListener("click", function() {

        if (buttonsPreparation[i].textContent == "Show") {
            buttonsPreparation[i].textContent = "Hide"
            info_preparation[i].classList.remove("hide")
            info_preparation[i].classList.add("show")
            info_preparation[i].innerHTML = textVarPreparation
        }
        else {
            buttonsPreparation[i].textContent = "Show"
            info_preparation[i].classList.remove("show")
            info_preparation[i].classList.add("hide")
            textVarPreparation = info_preparation[i].innerHTML
            info_preparation[i].innerHTML = ""
        }
    })
}

for (let i = 0; i < buttonInformation.length; i++) {
    buttonInformation[i].addEventListener("click", function() {

        if (buttonInformation[i].textContent == "Show") {
            buttonInformation[i].textContent = "Hide"
            info_information[i].classList.remove("hide")
            info_information[i].classList.add("show")
            info_information[i].innerHTML = textVarInformation
        }
        else {
            buttonInformation[i].textContent = "Show"
            info_information[i].classList.remove("show")
            info_information[i].classList.add("hide")
            textVarInformation = info_information[i].innerHTML
            info_information[i].innerHTML = ""
        }
    })
}