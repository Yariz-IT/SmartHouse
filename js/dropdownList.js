// Выпадающий спиоск

DOM.selectBox.querySelector
    ('.select__box-selected').onclick = (event) => {
        DOM.selectBox.classList.toggle('open')
    }

document.body.onclick = (event) => {
    const { target } = event
    if (
        !target.matches('.select__box')
        && !target.parentElement.matches('.select__box')
        && !target.parentElement.parentElement.
            matches('.select__box')
    ) {
        DOM.selectBox.classList.remove('open')
    }
}

DOM.selectBoxList.onclick = (event) => {
    const { target } = event
    if (target.matches('.select__box-item')) {
        const { room } = target.dataset
        const selectedItem = DOM.selectBoxList.querySelector('.selected')
        selectedItem.classList.remove('selected')
        target.classList.add('selected')
        DOM.selectBox.classList.remove('open')
        selectRoom(room)

    }
}