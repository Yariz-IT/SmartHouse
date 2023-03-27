// Изменение ползунка в процентах

function changeSlider(percent, slider) {
    if (percent >= 0 && percent <= 100) {
        const { type } = slider.parentElement.parentElement.dataset
        slider.querySelector('span').innerText = percent
        slider.style.height = `${percent}%`
        roomsData[activeRoom][type] = percent
    }
}
