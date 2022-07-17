import { uuid } from "uuidv4";
import baby2 from "./postimages/baby2.jpg";
import what from "./postimages/reactjs.jpg";
import mobile from "./postimages/mobile.png";
import github from "./postimages/github.jpg";
import taart from "./postimages/taart.png";
import graph from "./postimages/drew.tech.png";
import speed from "./postimages/andrea.jpg";
import phone from "./postimages/iphone.jpg";
import earth from "./postimages/earth.jpg";
import network from "./postimages/network.jpg";
import image from "./postimages/image.png";
import door from "./postimages/door.png";

export const Data = [
  {
    id: uuid(),
    title: "When to use React?",
    subtitle: "If you know JavaScript, you should use React.",
    body:
      "Here is why. You don’t need to use React to build 100% of your user interface. Instead, you can start really small and test it out in a very narrow scope. You can get a good feel for it and slowly scale your usage up as you get more comfortable.",
    body1:
      "Before using any framework you need a solid knowledge of JavaScript (JS). You can not code JS if you don't know HTML and CSS. For a professional web developer, there is no substantial difference in working with React or HTML, because it just takes some time to get used to using a framework. You don't have to take all the tricks out of your React hat. Just start writing in the root component, (App.js) using JavaScript and HTML.",
    image: baby2,
    imgMod: image

  },
  {
    id: uuid(),
    title: "What is React?",
    subtitle: "An open source JavaScript framework.",
    body:
      "Launched in 2013, React reached maturity on February (6th) 2019, when Hooks were introduced.",
      body1:
      "No more class based but function based programming what made it a lot easier to read. Hooks is an independent feature introduced in ReactJS 16.8 (3 years ago), that enables developers to write states and other features in function components.",
      body2:
      "You don’t need to deal with the complicated classes anymore. Using Hooks, you can easily manage state logic between components, colocate similar logic in a single component and share data with components without props and classes.",
    image: what,
    imgMod: graph

  },
  {
    id: uuid(),
    title: "Who is using React?",
    subtitle: "The winner takes it all.",
    body:
      "Big billion-dollar companies using React are proof of how good a framework is. Apart from Facebook, most of the well-known famous companies that use ReactJS are Twitter, Amazon Prime, Udemy, Expo, Codesandbox, Uber, and Pinterest. But Facebook is in the centre of it. ",
    body1:
      "Vue only has a 0.8% share, knowing React you can work in Vue as well.",
    body2:
      "Meanwhile React is growing into the typescript version of it, called Next; Angular is reaching it's end of life and long term support is now discontinued for it. All applications built by Angular developers continue to work, but product owners are encouraged to start the migration process.",



    image: taart,
    imgMod: door

  },
  {
    id: uuid(),
    title: "Taking the market by storm.",
    subtitle: "Need for speed.",
    body:
      "A big advantage is the speed of implementation of the tool and the possibility of basing a very dynamic interface on it. This means that it is possible to make necessary updates in real-time without the need for reloading the page which causes that typical flickering when changing from one page to another.",
    body1:
      "With Git, you can work remotely on a document with several developers on the same project. You can use the (reusable) components made for other projects.",
    body2:
      "Components are better and easier to adapt than templates.",
    image: speed,
    imgMod: earth

  },
  {
    id: uuid(),
    title: "Time is money...",
    subtitle: "Writing reusable code.",
    body:
      "  Another advantage of the framework is its specific, modular design, which allows reusing individual components on a completely different level.",
    body1:
      "Splitting up the app in components also makes it easier to share work and debug faster.",
    body2: "Thanks to it, not only does the programmer’s work efficiency increases, but also it is much easier to manage all available applications. Introducing changes in one component will not lead to an exponential fall in the tool’s fluidity and a loss of its stability. When encountering problems, don't worry... Due to it's popularity, there is a huge community to help you with plenty of YouTube tutorials or Stack Overflows.",
    image: github,
    imgMod: network

  },
  {
    id: uuid(),
    title: "React Native",
    subtitle: "A mobile first mindset.",
    body:
      " Mobile phones are everyone's pocket computer. The software for those devices can not be a smaller, responsive version of the computer application.",
    body1:
      "Touch screens have dynamic keyboards that are different depending on the information you have to type. Are you introducing a date or rather an email? A different keyboard is called, whereas keyboards on computers don't appear on their screens.",
    body2:
      "Cell phones don't allow 'hover effects'. Querty or Azerty, it can be programmed, maybe you want mainly numbers?",
    image: mobile,
    imgMod: phone
  }
];
