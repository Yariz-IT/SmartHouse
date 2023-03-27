// Отслеживание изменений ползунка 

function watchSlider(slider) {
    let mouseover = false
    let mousedown = false
    let position = 0
    let range = 0
    let change = 0
    const parent = slider.parentElement

    parent.onmouseover = () => {
        mouseover = true
        mousedown = false
    }
    parent.onmouseout = () => mouseover = false
    parent.onmouseup = () => mousedown = false
    parent.onmousedown = (event) => {
        mousedown = true
        position = event.offsetY
        range = 0
    }

    parent.onmousemove = (event) => {
        if (mouseover && mousedown) {
            range = event.offsetY - position
            const newChange = Math.round(range / -0.1)

            if (newChange !== change) {
                let percent =
                    +slider.querySelector('span').innerText

                if (newChange < change) {
                    percent = percent - 1
                } else {
                    percent = percent + 1
                }
                change = newChange
                changeSlider(percent, slider)
            }
        }
    }

}

watchSlider(DOM.sliders.light)
watchSlider(DOM.sliders.humidity)

