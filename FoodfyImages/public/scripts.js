const PhotosUpload = {
    input: "",
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 5,
    files: [],
    handleFileInput(event) {
        const { files: fileList } = event.target
        PhotosUpload.input = event.target

        if (PhotosUpload.hasLimit(event)) return

        Array.from(fileList).forEach(file => {

            PhotosUpload.files.push(file)

            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)
                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })

        PhotosUpload.input.files = PhotosUpload.getAllFiles()
    },
    hasLimit(event) {
        const { uploadLimit, input, preview } = PhotosUpload
        const { files: fileList } = input

        if (fileList.length > uploadLimit) {
            alert(`Send only ${uploadLimit} photos!`)
            event.preventDefault()
            return true
        }

        const photosDiv = []
        preview.childNodes.forEach(item => {
            if (item.classList && item.classList.value == "photo")
                photosDiv.push(item)
        })

        const totalPhotos = fileList.length + photosDiv.length
        if (totalPhotos > uploadLimit) {
            alert("You've reached the photo limit!")
            event.preventDefault()
            return true
        }

        return false
    },
    getAllFiles() {
        const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

        PhotosUpload.files.forEach(file => dataTransfer.items.add(file))

        return dataTransfer.files
    },
    getContainer(image) {
        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick = PhotosUpload.removePhoto

        div.appendChild(image)

        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },
    getRemoveButton() {
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML = "close"
        return button

    },
    removePhoto(event) {
        const photoDiv = event.target.parentNode // <div class="photo"
        const photosArray = Array.from(PhotosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        PhotosUpload.files.splice(index, 1)
        PhotosUpload.input.files = PhotosUpload.getAllFiles()

        photoDiv.remove()
    },
    removeOldPhoto(event) {
        const photoDiv = event.target.parentNode

        if (photoDiv.id) {
            const removedFiles = document.querySelector('input[name="removed_files"]')
            if (removedFiles) {
                removedFiles.value += `${photoDiv.id},` 
            }
        }

        photoDiv.remove()
    }
}

const ImageGallery = {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e) {
        const { target } = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
        target.classList.add('active')

        ImageGallery.highlight.src = target.src
        Lightbox.image.src = target.src
    }
}

const Lightbox = {
    target: document.querySelector('.lightbox-target'),
    image: document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-target a.lightbox-close'),
    open() {
        Lightbox.target.style.opacity = 1
        Lightbox.target.style.top = 0
        Lightbox.target.style.bottom = 0
        Lightbox.closeButton.style.top = 0
    },
    close() {
        Lightbox.target.style.opacity = 0
        Lightbox.target.style.top = "-100%"
        Lightbox.target.style.bottom = "initial"
        Lightbox.closeButton.style.top = "-80px"
    }
}

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