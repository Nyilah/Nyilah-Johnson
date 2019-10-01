// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import{Header, Nav, Main, Footer} from "./components"

// use state to render the appropriate heading
// depending on the state of the app what page is actually
// selected or being displayed
const state = {
  home: {
    heading: 'Home Page'
  },
  about: {
    heading: 'About Page'
  }
};

document.querySelector("#root").innerHTML =`
${Header(state.home.heading)}
${Nav()}
${Main()}
${Footer('&copy; Nyilah Johnson no rights reserved')}
`

const aboutLink = document.querySelector('#about');

  aboutLink.addEventListener('click', function(event){
  event.preventDefault();
  console.log('you clicked me');
  console.log(state[event.target.textContent]);
  })
