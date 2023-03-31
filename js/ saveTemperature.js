// Сохранение температуры

DOM.temperatureSaveButton.onclick = () => {
    const temperature = +DOM.temperature.innerText
    roomsData[activeRoom].temperature = temperature
    alert('Temperature saved')
}
