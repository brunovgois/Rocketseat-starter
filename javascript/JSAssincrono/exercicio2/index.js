let textInput = document.querySelector("input");
let button = document.querySelector("button");
const container = document.querySelector("#myDiv");
let ul;

button.addEventListener("click", () => {
  if (textInput.value != "") githubRequest(textInput.value);
});

textInput.addEventListener("keyup", e => {
  if (e.which === 13 && textInput.value !== "") githubRequest(textInput.value);
});

function githubRequest(user) {
  axios
    .get(" https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      criarListaRepositorios(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function criarListaRepositorios(response) {
  if (container.hasChildNodes()) {
    container.removeChild(ul);
    createNewUl();
  } else {
    createNewUl();
  }

  for (li of response.data) {
    let item = document.createElement("li");
    let text = document.createTextNode(li.name);
    item.appendChild(text);
    ul.appendChild(item);
  }
}

function createNewUl() {
  ul = document.createElement("ul");
  container.appendChild(ul);
}
