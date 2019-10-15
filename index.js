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
${Nav()}
${Main(st)}
${Footer()}
`;

router.updatePageLinks();
}

router

.on(':page', params => render(state[`${params.page.slice(0, 1).toUpperCase()}${params.page.slice(1).toLowerCase()}`])
)
.on("/", render())
.resolve();

