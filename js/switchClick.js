// Клик по переключателю 

DOM.switch.humidity.onclick = () => {
    const isOff = !DOM.switch.humidity.matches('.off')
    changeSwitch(activeTab, isOff)
}

DOM.switch.light.onclick = () => {
    const isOff = !DOM.switch.light.matches('.off')
    changeSwitch(activeTab, isOff)
}