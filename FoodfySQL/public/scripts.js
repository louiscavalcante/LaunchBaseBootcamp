// Add Ingredient - USED ON ADMIN RECIPE CREATE PAGE && ADMIN RECIPE EDIT PAGE
const addButtonIngredient = document.querySelectorAll('.addIngredient')
const addStepIngredient = document.getElementById('addStepIngredient')

for (let i = 0; i < addButtonIngredient.length; i++) {
    addButtonIngredient[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'ingredients')
        input.setAttribute('placeholder', 'Type another one here.')

        addStepIngredient.append(input)
    })
}

// Add Preparation - USED ON ADMIN RECIPE CREATE PAGE && ADMIN RECIPE EDIT PAGE
const addButtonPreparation = document.querySelectorAll('.addPreparationSteps')
const addStepPreparation = document.getElementById('addStepPreparation')

for (let i = 0; i < addButtonPreparation.length; i++) {
    addButtonPreparation[i].addEventListener("click", function() {

        let input = document.createElement("input")
        input.setAttribute('name', 'preparation')
        input.setAttribute('placeholder', 'Type another one here.')

        addStepPreparation.append(input)
    })
}

// Hide Class - USED ON EACHRECIPE PAGE
const hideButton = document.querySelectorAll(".button-hide")
const hideClass = document.querySelectorAll(".hideClass")

for (let i = 0; i < hideButton.length; i++) {
    
    hideButton[i].addEventListener("click", function() {
        if (hideButton[i].textContent == "Show") {
            hideButton[i].textContent = "Hide"
            hideClass[i].classList.remove("hide")
        }
        else {
            hideButton[i].textContent = "Show"
            hideClass[i].classList.add("hide")
        }
    })
}