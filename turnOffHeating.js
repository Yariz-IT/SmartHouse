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

