// Переключение вкладок

DOM.settingsTabs.querySelectorAll('.tab')
    .forEach((tab) => {
        tab.onclick = () => {
            const optionType = tab.dataset.type
            activeTab = optionType
            changeSettingsType(optionType)
        }
    })


