export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if(className) {
        elem.className = className
    }

    if (text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: './svg/back-button.svg',

    },
    {
        width: 24,
        height: 24,
        src: './img/ava.jpg',
    },
]

export const createHeader = () => {
    const header = createElement('header', 'screen__nav')

    HEADER_BUTTON_LIST.forEach((params) => {
        const button = createElement('button', 'button')

        const img = createElement('img', 'screen__profile-photo')

        Object.entries(params).forEach(([key, value]) => {
            img[key] = value
        })

        button.insertAdjacentElement('beforeend', img)

        header.insertAdjacentElement('beforeend', button)
    })

    return header
}

const PANEL_ICON_LIST = [
    {
        src: './svg/signal.svg',

    },
    {
        src: './svg/wi-fi.svg',
    },
    {
        src: './svg/battery.svg',
    },
]

export const createPanel = () => {
    const panel = createElement('div', 'screen__top-panel')

    const time = createElement('p', 'screen__time', '14:00')
    panel.append(time);

    const button = createElement('div', 'screen__info')
    panel.append(button)

    PANEL_ICON_LIST.forEach((icons) => {

        const icon = createElement('img', 'screen__icon')

        Object.entries(icons).forEach(([key, value]) => {
            icon[key] = value
        })

           
        button.insertAdjacentElement('beforeend', icon)

       
    })

    return panel
}