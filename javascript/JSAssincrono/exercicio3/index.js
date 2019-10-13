let textInput = document.querySelector("input");
let button = document.querySelector("button");
const container = document.querySelector("#myDiv");
let ul = document.createElement('ul');

button.addEventListener("click", () => {
  if (textInput.value != "") githubRequest(textInput.value);
});

textInput.addEventListener("keyup", e => {
  if (e.which === 13 && textInput.value !== "") githubRequest(textInput.value);
});

function githubRequest(user) {

  loadingRequest();
  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      criarListaRepositorios(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function criarListaRepositorios(response) {

  createNewUl();

  for (li of response.data) {
    createNewLi(li.name);
  }
}

function createNewUl() {
  if (container.hasChildNodes()) {
    container.removeChild(ul);
    ul = document.createElement("ul");
  } else 
    ul = document.createElement("ul");

  container.appendChild(ul);
}

function createNewLi(text) {
  let textNode = document.createTextNode(text);
  let item = document.createElement("li");
  item.appendChild(textNode);
  ul.appendChild(item);
}

function loadingRequest() {
  createNewUl();
  createNewLi('Carregando...');
}
