
 // Включение и выключение света, влажности

 function changeSwitch(activeTab, isOff) {
    if (isOff) {
        DOM.switch[activeTab].classList.add('off')
    } else {
        DOM.switch[activeTab].classList.remove('off')
    }

    roomsData[activeRoom][`${activeTab}Off`] = isOff
}