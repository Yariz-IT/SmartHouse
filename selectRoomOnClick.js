// Выбор комнаты по клику

DOM.rooms.querySelectorAll('.room').forEach(room => {
    room.onclick = (event) => {
        const chooseRoom = room.dataset.room
        selectRoom(chooseRoom)
    }
})

