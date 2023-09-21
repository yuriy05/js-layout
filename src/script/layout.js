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
    const header = createElement('header', 'header')

    HEADER_BUTTON_LIST.forEach((params) => {
        const button = createElement('button', 'button')

        const img = createElement('img', 'img')

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
    const panel = createElement('div', 'panel')

    const time = createElement('p', 'panel__time', '14:00')
    panel.append(time);

    const button = createElement('div', 'panel__info')
    panel.append(button)

    PANEL_ICON_LIST.forEach((icons) => {

        const icon = createElement('img', 'panel__icon')

        Object.entries(icons).forEach(([key, value]) => {
            icon[key] = value
        })

           
        button.insertAdjacentElement('beforeend', icon)

       
    })

    return panel
}

//===

export const createMain= () => {
    const main = createElement('main', 'main')

    return main
}
//===

export const createTabs = () => {
    const tabs = createElement('div', 'tabs')

    const firstTab = createElement('div', 'tab');
    const firstTabButton = createElement('button', 'button button--active', 'База знань');
    firstTab.appendChild(firstTabButton);

// Створення другої вкладки (tab)
    const secondTab = createElement('div', 'tab tab--active');
    const secondTabButton = createElement('button', 'button', 'Інформація');
    secondTab.appendChild(secondTabButton);

// Додавання вкладок до контейнера tabs
    tabs.append(firstTab);
    tabs.append(secondTab);

    return tabs
}

//===

export const createBaner = () => {
    const baner = createElement('div', 'baner')

    return baner
}

//===

export const createArticle = () => {
    const article = createElement('div', 'info')

    const articleTitle = createElement('h2', 'title', 'Що таке база знань?')
    article.append(articleTitle)

    const articleInfo = createElement('p', 'text', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ')
    article.append(articleInfo)

    return article
}

//===

export const createButton = () => {
    const button = createElement('button', 'link', `Перейти до ком'юніті у Телеграм`)

    return button
}