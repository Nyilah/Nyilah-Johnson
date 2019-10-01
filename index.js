// import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Footer from"./components/Footer";
import{Header, Nav, Main, Footer} from "./components"

document.querySelector("#root").innerHTML =`
${Header('Hello from an spa')}
${Nav()}
${Main()}
${Footer('&copy; Nyilah Johnson no rights reserved')}
`
