// Переключение панели настроек   

function changeSettingsType(type) {
    const tabSelected =
        DOM.settingsTabs.querySelector('.tab.selected')

    const panelSelected =
        DOM.settingsPanels.querySelector('.selected')

    const tab =
        DOM.settingsTabs.querySelector(`[data-type=${type}]`)

    const panel =
        DOM.settingsPanels.querySelector(`[data-type=${type}]`)

    tabSelected.classList.remove('selected')
    panelSelected.classList.remove('selected')
    tab.classList.add('selected')
    panel.classList.add('selected')

}