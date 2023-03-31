
// Отрисовка изменения температуры

function renderTemperature(temperature) {
    const min = 15
    const max = 30
    const range = max - min
    const percent = range / 100
    const lineMin = 48
    const lineMax = 265
    const lineRange = lineMax - lineMin
    const linePercent = lineRange / 100
    const roundMin = -240
    const roundMax = 48
    const roundRange = roundMax - roundMin
    const roundPercent = roundRange / 100

    if (temperature >= min && temperature <= max) {
        const finishPercent =
            Math.round((temperature - min) / percent)

        const lineFinishPercent =
            lineMin + linePercent * finishPercent

        const roundFinishPercent =
            roundMin + roundPercent * finishPercent

        DOM.temperatureLine.style.strokeDasharray =
            `${lineFinishPercent} 265`
        DOM.temperatureRound.style.transform =

            `rotate(${roundFinishPercent}deg`
        DOM.temperature.innerText = temperature
    }

}
