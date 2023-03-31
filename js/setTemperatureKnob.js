// Установка значения кнопки включения температуры

function setTemperatureKnob() {
    if (roomsData[activeRoom].temperatureOff) {
        DOM.temperatureKnob.classList.add('off')
    } else {
        DOM.temperatureKnob.classList.remove('off')
    }
}
