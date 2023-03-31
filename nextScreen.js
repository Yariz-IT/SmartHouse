// Отображения экрана 

function nextScreen(isRooms) {
    setTimeout(() => {
        if (isRooms) {
            DOM.rooms.style.display = 'grid'
            DOM.settings.style.display = 'none'

        } else {
            DOM.rooms.style.display = 'none'
            DOM.settings.style.display = 'block'

        }
    }, 200)
}
