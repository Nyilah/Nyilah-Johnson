// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";

import axios from "axios";

import { capitalize } from "lodash";

import { auth, db } from "./firebase";
console.log(auth);

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

  .on(":page", params => render(state[capitalize(params.page)]))
  .on("/", () => render())
  .resolve();

axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  state.Blog.main = response.data
    .map(
      ({ title, body }) => `
<article>
<h2>${title}</h2>
  <p>${body}</p>
  </article>
`
    )
    .join("");
});
//Gallery
db.collection("class")
  .get()

  /**
   * Developer's Note: There is no straightforward way to get data back as an Array,
   * so 'superpowers' are useless.😞
   */
  .then(querySnapshots => {
    state.Gallery.main =
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          const { caption, credit, imageUrl } = doc.data();

          return `
        <figure>
          <img src="${imageUrl}" alt="">
          <figcaption>${caption} - ${credit}</figcaption>
        </figure>
      `;
        })
        .join(" ") +
      `</div>`;

    if (
      router.lastRouteResolved().params &&
      capitalize(router.lastRouteResolved().params.page) === "Gallery"
    ) {
      render(state.Gallery);
    }
  })
  .catch(err => console.error("Error loading pics", err));

//admin
// Admin
// TODO: Rather than grabbing each element manually, consider using (`event.target.elements`) on the `submit` event.
// Are we on Admin page?
if (
  router.lastRouteResolved().params &&
  capitalize(router.lastRouteResolved().params.page) === "Admin"
) {
  // Are we logged in?
  auth.onAuthStateChanged(user => {
    if (user) { // We are logged in!
      state.Admin.main = `<button type="button">Log out!</button>`;

      render(state.Admin);

      document.querySelector("button").addEventListener("click", () => {
        auth
          .signOut()
          .then(() => {
            state.Admin.main = `
            <form>
      <input type="email" />
      <input type="password" />
      <input type="submit" value="Log in!" />
    </form>
      `;
      render(state.Admin);
          })
          .catch(err => console.log("Error signing out", err.message));
      });
    } else {
      console.log('you logged in');
      const email = document.querySelector('[type="email"]');
      const password = document.querySelector('[type="password"]');

      document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();

      auth
      .signInWithEmailAndPassword(email.value, password.value)
      .catch(err => console.error("Got an error", err.message));
      });
    }
  });

  render(state.Admin);
}
