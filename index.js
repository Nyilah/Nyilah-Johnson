// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import{Header, Nav, Main, Footer} from "./components"

import * as state from "./store";

import Navigo from "navigo";

const router = new Navigo(location.origin);
// use state to render the appropriate heading
// depending on the state of the app what page is actually
// selected or being displayed
//the parameter st represents a piece of state

function render(st = state.Home) {
document.querySelector("#root").innerHTML =`
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;

const links = document.querySelectorAll("nav a, footer a");

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();
    render(state[event.target.textContent]);
  });
}
}
render();
