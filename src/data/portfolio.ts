import game from '../assets/game.png'
import rslang from '../assets/rslang.png'
import store from '../assets/store.png'
import keyboard from '../assets/keyboard.png'

const portfolio = [
  {
    imageUrl: game,
    url: 'https://ju-nmd2021.github.io/fop-project-brawlstarslovers/',
    title: 'PVP Farmgame',
    description: 'A local multiplayer game where you can fight with other players and earn points.',
    stack: ['Javascript', 'CSS', 'HTML', 'OOP']
  },
  {
    imageUrl: rslang,
    url: 'https://delightful-sherbet-646b9e.netlify.app/',
    title: 'English Learning App',
    description: 'A responsive single-page application for learning English words. A textbook with a database of words for learning, mini-games and the statistics page',
    stack: ['React', 'Typescript', 'SCSS']
  },
  {
    imageUrl: store,
    url: 'https://rolling-scopes-school.github.io/pupixipup-JSFE2022Q1/online-shop/index.html',
    title: 'Online store',
    description: 'Online store with the focus on front-end logics.',
    stack: ['Typescript', 'Jest', 'Fakestore API', 'Webpack']
  },
  {
    imageUrl: keyboard,
    url: 'https://pupixipup.github.io/virtual-keyboard/',
    title: 'Virtual keyboard',
    description: 'Virtual replication of a physical keyboard. The keyboard is created using JavaScript and CSS.',
    stack: ['Javascript', 'CSS']
  }
]
export default portfolio