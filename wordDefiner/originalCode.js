var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.right = '0';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
overlay.style.padding = '10px';
overlay.style.zIndex = '9999';
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter a word';
input.style.marginRight = '5px';
var button = document.createElement('button');
button.innerHTML = 'Search';
button.style.cursor = 'pointer';
var definitionDisplay = document.createElement('p');
definitionDisplay.id = 'definition';
definitionDisplay.style.color = "white";
overlay.appendChild(input);
overlay.appendChild(button);
document.body.appendChild(overlay);
overlay.appendChild(definitionDisplay);
button.addEventListener('click', function () {
var word = input.value;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
xhr.onload = function () {
if (xhr.status === 200) {
var definition = JSON.parse(xhr.responseText)[0].meanings[0].definitions[0].definition;
definitionDisplay.innerHTML = 'Definition: ' + definition;
} else {
console.error('Error fetching definition:', xhr.statusText);
definitionDisplay.innerHTML = 'Error fetching definition.';
}
};
xhr.send();
});
