// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import { Header, Nav, Main, Footer } from "./components";

// use state to render the appropriate heading
// depending on the state of the app what page is actually
// selected or being displayed
const state = {
  home: {
    heading: "Home Page"
  },
  about: {
    heading: "About Page"
  },
  contact: {
    heading: "Contact Page"
  },
  Gallery: {
    heading: "Gallery Page"
  }
  //TODO add links array to each piece of state
};
//the parameter st represents a piece of state
function render(st = state.home) {
  document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render();

const links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.textContent);
  });
}
