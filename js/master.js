const DOM = {
    selectBox: document.getElementById('select__box'),
    selectBoxList: document.querySelector('.select__box-list'),
    rooms: document.getElementById('rooms'),
    settings: document.getElementById('settings'),
    settingsTabs: document.getElementById('settings__tabs'),
    settingsPanels: document.getElementById('settings__panel'),
    temperatureLine: document.getElementById('temperature__line'),
    temperatureRound: document.getElementById('temperature__round'),
    temperature: document.getElementById('temperature'),
    temperatureButton: document.getElementById('temperature__button'),
    temperatureSaveButton: document.getElementById('save__temperature'),
    temperatureKnob: document.getElementById('knob'),
    sliders: {
        light: document.getElementById('light__slider'),
        humidity: document.getElementById('humidity__slider')
    },
    switch: {
        light: document.getElementById('switch__off-light'),
        humidity: document.getElementById('switch__off-humidity')
    }
}

const rooms = {
    all: 'All rooms',
    living__room: 'Living room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    bathroom: 'Bathroom',
    parlor: 'Parlor',
    restroom: 'Restroom'
}

let activeRoom = 'all'
let activeTab = 'temperature'

const roomsData = {

    living__room: {
        temperature: 20,
        lightOff: false,
        humidity: 50,
        temperatureOff: false,
        light: 100,
        humidityOff: false,

    },

    bedroom: {
        temperature: 20,
        lightOff: false,
        temperatureOff: false,
        light: 100,
        humidity: 50,
        humidityOff: false,

        
    },

    kitchen: {
        temperature: 20,
        lightOff: false,
        temperatureOff: false,
        light: 100,
        humidity: 50,
        humidityOff: false,

    },

    bathroom: {
        temperature: 20,
        lightOff: false,
        temperatureOff: false,
        light: 100,
        humidity: 50,
        humidityOff: false,

    },

    parlor: {
        temperature: 20,
        lightOff: false,
        temperatureOff: false,
        light: 100,
        humidity: 50,
        humidityOff: false,
        humidityOff: false,

    },

    restroom: {
        temperature: 20,
        lightOff: false,
        temperatureOff: false,
        light: 100,
        humidity: 50,
        humidityOff: false,

    },

}

// Выпадающий спиоск

DOM.selectBox.querySelector
    ('.select__box-selected').onclick = (event) => {
        DOM.selectBox.classList.toggle('open')
    }

document.body.onclick = (event) => {
    const { target } = event
    if (
        !target.matches('.select__box')
        && !target.parentElement.matches('.select__box')
        && !target.parentElement.parentElement.
            matches('.select__box')
    ) {
        DOM.selectBox.classList.remove('open')
    }
}

DOM.selectBoxList.onclick = (event) => {
    const { target } = event
    if (target.matches('.select__box-item')) {
        const { room } = target.dataset
        const selectedItem = DOM.selectBoxList.querySelector('.selected')
        selectedItem.classList.remove('selected')
        target.classList.add('selected')
        DOM.selectBox.classList.remove('open')
        selectRoom(room)

    }
}


// Выбор комнаты по клику

DOM.rooms.querySelectorAll('.room').forEach(room => {
    room.onclick = (event) => {
        const chooseRoom = room.dataset.room
        selectRoom(chooseRoom)
    }
})

// Сохранение температуры

DOM.temperatureSaveButton.onclick = () => {
    const temperature = +DOM.temperature.innerText
    roomsData[activeRoom].temperature = temperature
    alert('Temperature saved')
}

// Отключение обогрева 

DOM.temperatureKnob.onclick = () => {
    const knob = DOM.temperatureKnob
    knob.classList.toggle('off')
    if (knob.matches('.off')) {
        roomsData[activeRoom].temperatureOff = true
    } else {
        roomsData[activeRoom].temperatureOff = false
    }
}


// Переключение вкладок

DOM.settingsTabs.querySelectorAll('.tab')
    .forEach((tab) => {
        tab.onclick = () => {
            const optionType = tab.dataset.type
            activeTab = optionType
            changeSettingsType(optionType)
        }
    })


// Клик по переключателю 

DOM.switch.humidity.onclick = () => {
    const isOff = !DOM.switch.humidity.matches('.off')
    changeSwitch(activeTab, isOff)
}

DOM.switch.light.onclick = () => {
    const isOff = !DOM.switch.light.matches('.off')
    changeSwitch(activeTab, isOff)
}