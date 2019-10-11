let textInput = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", textInput => {
  if ((textInput.value != "")) githubRequest(textInput.value);
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
	
}
