
// Регулировка температуры с помощью мыши

function changeTemperature() {
    let mouseover = false
    let mousedown = false
    let position = 0
    let range = 0
    let change = 0

    DOM.temperatureButton.onmouseover = () => {
        mouseover = true
        mousedown = false

    }

    DOM.temperatureButton.onmouseout = () => mouseover = false
    DOM.temperatureButton.onmouseup = () => mousedown = false
    DOM.temperatureButton.onmousedown = (event) => {
        mousedown = true
        position = event.offsetY
        range = 0
    }

    DOM.temperatureButton.onmousemove = (event) => {
        if (mouseover && mousedown) {
            range = event.offsetY - position
            const newChange = Math.round(range / -5)

            if (newChange !== change) {
                let temperature = +DOM.temperature.innerText

                if (newChange < change) {
                    temperature = temperature - 1
                } else {
                    temperature = temperature + 1
                }
                change = newChange
                renderTemperature(temperature)
            }
        }
    }
}

changeTemperature()