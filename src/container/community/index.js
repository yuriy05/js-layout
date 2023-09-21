import {
  createElement,
  createHeader,
  createPanel,
  createTabs,
  createMain,
  createBaner,
  createArticle,
  createButton,
} from '../../script/layout'

const page = document.querySelector('.page')

//==

const panel = createPanel()

page.append(panel)

//===

const header = createHeader()

page.append(header)

//===

const title = createElement('h1', 'title', `Ком'юніті`)

page.append(title)

//===

const main = createMain()

page.append(main)

//===

const tabs = createTabs()

main.append(tabs)

//===

const baner = createBaner()

main.append(baner)

//===

const article = createArticle()

main.append(article)

//===

const button = createButton()

main.append(button)

//===

const closeLine = createElement('div', 'close-line')

page.append(closeLine)