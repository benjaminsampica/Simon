window.setSelectedImage = (index) => {
    var element = document.querySelectorAll("img")[index];

    if (element !== null && element !== undefined) {
        element.classList.add("selected");
    }
}

window.unsetSelectedImage = (index) => {
    var element = document.querySelectorAll("img")[index];

    if (element !== null && element !== undefined) {
        element.classList.remove("selected");
    }
}