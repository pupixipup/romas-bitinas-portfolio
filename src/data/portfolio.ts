import game from "../assets/game.png"
import rslang from "../assets/rslang.png"
import store from "../assets/store.png"
import keyboard from "../assets/keyboard.png"
import portfolioApp from "../assets/app.png"

const portfolio = [
  {
    imageUrl: game,
    url: "https://ju-nmd2021.github.io/fop-project-brawlstarslovers/",
    title: "PVP Farmgame",
    description:
      "A local multiplayer game where you can fight with other players and earn points.",
    stack: ["Javascript", "CSS", "HTML", "OOP"],
  },
  {
    imageUrl: rslang,
    url: "https://delightful-sherbet-646b9e.netlify.app/",
    title: "English Learning App",
    description:
      "A responsive single-page application for learning English words. A textbook with a database of words for learning, mini-games and the statistics page",
    stack: ["React", "Typescript", "SCSS"],
  },
  {
    imageUrl: store,
    url: "https://rolling-scopes-school.github.io/pupixipup-JSFE2022Q1/online-shop/index.html",
    title: "Online store",
    description: "Online store with the focus on front-end logics.",
    stack: ["Typescript", "Jest", "Fakestore API", "Webpack"],
  },
  {
    imageUrl: keyboard,
    url: "https://pupixipup.github.io/virtual-keyboard/",
    title: "Virtual keyboard",
    description:
      "Virtual replication of a physical keyboard. The keyboard is created using JavaScript and CSS.",
    stack: ["Javascript", "CSS"],
  },
  {
    imageUrl: portfolioApp,
    url: "https://portfolio-app-xyx.herokuapp.com/about",
    title: "Yet another portfolio app",
    description:
      "This is my portfolio app which was done as a part of University course. It is a full-stack application with the focus on back-end. The app is deployed on Heroku and built with SQLite, Express and Handlebars. Yes, it might seem strange to have two portfolio apps, but I wanted to try out different technologies.",
    stack: ["SQLite", "Express", "NodeJS", "Handlebars"],
  },
]
export default portfolio
