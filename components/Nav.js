import { Links } from "../store";

function linksBuilder(links) {
  let linksHTML = "";

  for (let i = 0; i < links.length; i += 1) {
    linksHTML += `<li><a href="./${links[i]}">${links[i]}</a></li>`;
  }
  return linksHTML;
}

export default () =>
  `<nav>
      <span class="fas fa-hamburger is-hidden--desktop"></span>
      <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
        ${linksBuilder(Links)}
      </ul>
    </nav>`;

