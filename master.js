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

