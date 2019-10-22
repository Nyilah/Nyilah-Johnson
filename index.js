// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import{Header, Nav, Main, Footer} from "./components"

import * as state from "./store";

import Navigo from "navigo";

import axios from "axios";

import { capitalize } from 'lodash';

import { db } from "./firebase"


const router = new Navigo(location.origin);



// use state to render the appropriate heading
// depending on the state of the app what page is actually
// selected or being displayed
//the parameter st represents a piece of state

function render(st = state.Home) {
document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav()}
${Main(st)}
${Footer()}
`;

router.updatePageLinks();
}

router

.on(':page', params => render(state[capitalize(params.page)]
)
)
.on("/", render())
.resolve();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
state.Blog.main = response.data.map(
  ({ title, body }) => `
<article>
<h2>${title}</h2>
  <p>${body}</p>
  </article>
`
  ).join('');

})
