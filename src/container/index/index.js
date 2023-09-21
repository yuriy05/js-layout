import { createElement, createHeader, createPanel } from "../../script/layout";

const screen = document.querySelector('.screen')


const panel = createPanel()

screen.append(panel)

const header = createHeader()

screen.append(header)

const title = createElement('h1', 'title', 'Мій Блог')

screen.append(title)

const NEWS_LIST = [
    {
    category: [
        {text: 'Важливо', id: 1},
        {text: 'Нова', id: 2},
    ],
    info: ' До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
    },

    {
        category: [
            {text: 'Нова', id: 2},
        ],
        info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій',
        date: '15.01',
        viewed: true,
    },
    {
        category: [
        {text: 'Важливо', id: 1},
        {text: 'Нова', id: 2},
    ],
    info: ' До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
    },
]

const createPost = () => {
    const newsList = createElement('div', 'news__list')

    NEWS_LIST.forEach((newsData) => {
        const news = createElement(
            'div',
            newsData.viewed ? 'news button news--viewed' : 'news button',
        )

        const newsHeader = createElement('div', 'news__header')

        const categoryList = createElement(
            'div',
            'news__badge-list',
        )

        newsData.category.forEach((category) => {
            const categorySpan = createElement(
                'span',
                `news__badge-category news__badge-category--${category.id}`,
                `${category.text}`,
            )
            categoryList.append(categorySpan)
        })

        //===

        const dateSpan = createElement(
            'span',
            'news__date',
            newsData.date
        )

        //===

        newsHeader.append(categoryList, dateSpan)

        //===

        const infoParagraph = createElement(
            'p',
            'news__info',
            newsData.info,
        )

        news.append(newsHeader, infoParagraph)

        //===

        newsList.append(news)
    })

    return newsList
}

const news = createPost()

screen.append(news)

const closeLine = createElement('div', 'screen__close-line')

screen.append(closeLine)
