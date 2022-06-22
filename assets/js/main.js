const photos = document.querySelectorAll(".panel")
photos.forEach(element => {
    element.addEventListener("click", () => {
        removeActive()
        element.classList.add("active")
    } )
})


function removeActive(){
    photos.forEach(element => {
        element.classList.remove("active")
        
    })
}