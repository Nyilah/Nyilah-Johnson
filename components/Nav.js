

function linksBuilder(links) {
  let linksHTML = ''

for(let i = 0; i < links.length; i += 1) {
  linksHTML += `<li><a href="./${links[i]}">${links[i]}</a></li>`;
}
return linksHTML;
}

export default function() {
  return `<nav>
      <span class="fas fa-hamburger is-hidden--desktop"></span>
      <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
        <li><a href="./">Home</a></li>
        <li><a href="./About">About</a></li>
        <li><a href="./Contact">contact</a></li>
        <li><a href="./Gallery">Gallery</a></li>
        <li><a href="./Blog">Blog</a></li>
      </ul>
    </nav>`;
}
