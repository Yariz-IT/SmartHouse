// Выбор комнаты

function selectRoom(room) {
    const selectedRoom = DOM.rooms.querySelector('.selected')
    if (selectedRoom) {
        selectedRoom.classList.remove('selected')
    }
    if (room !== 'all') {
        const newSelectedRoom =
            DOM.rooms.querySelector(`[data-room=${room}]`)
        newSelectedRoom.classList.add('selected')

        const {
            temperature,
            light,
            humidity,
            lightOff,
            humidityOff,
        } = roomsData[room]
        activeRoom = room
        newSelectedRoom.classList.add('selected')
        nextScreen(false)

        DOM.temperature.innerText = temperature
        renderTemperature(temperature)
        setTemperatureKnob()
        changeSettingsType(activeTab)
        changeSlider(light, DOM.sliders.light)
        changeSlider(humidity, DOM.sliders.humidity)
        changeSwitch('light', lightOff)
        changeSwitch('humidity', humidityOff)

        
    } else {
        nextScreen(true)
    }
    const rememberSelectedRoom = DOM.selectBox.querySelector
        ('.select__box-item.selected')
    rememberSelectedRoom.classList.remove('selected')

    const newSelectedRoom = DOM.selectBox.
        querySelector(`[data-room=${room}]`)
    newSelectedRoom.classList.add('selected')

    const chooseRoom = DOM.selectBox.querySelector
        ('.select__box-selected span')
    chooseRoom.innerText = rooms[room]

}

