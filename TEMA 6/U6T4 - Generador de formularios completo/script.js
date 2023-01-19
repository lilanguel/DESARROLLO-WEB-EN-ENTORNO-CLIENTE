document.getElementById("buttonCreateInputTypeText").addEventListener('click', createInputTypeText);
document.getElementById("buttonCreateInputTypePassword").addEventListener('click', createInputTypePassword);
document.getElementById("buttonCreateTextArea").addEventListener('click', createInputTypeTextarea);
document.getElementById("buttonCreateLabel").addEventListener('click', createLabel);
document.getElementById("buttonCreateImage").addEventListener('click', createImage);
document.getElementById("buttonCreateCheckbox").addEventListener('click', createInputTypeCheckbox);
document.getElementById("buttonCreateRadio").addEventListener('click', createInputTypeRadio);
document.getElementById("buttonCreateSubmit").addEventListener('click', createInputTypeSubmit);

function createInputTypeText() {
    let name = prompt("Introduce el atributo name del input");
    let inputCreado = document.createElement("input")
    document.getElementById("myForm").appendChild(inputCreado);
    inputCreado.name = name;
    inputCreado.type = "text"
}

function createInputTypePassword() {
    let name = prompt("Introduce el atributo name del input");
    let inputCreado = document.createElement("input")
    document.getElementById("myForm").appendChild(inputCreado);
    inputCreado.name = name;
    inputCreado.type = "password"
}

function createInputTypeTextarea() {
    let name = prompt("Introduce el atributo name del textarea");
    let textareaCreado = document.createElement("textarea")
    document.getElementById("myForm").appendChild(textareaCreado);
    textareaCreado.name = name;
    textareaCreado.cols = 40;
    textareaCreado.rows = 5;
}

function createLabel() {
    let labelCreado = document.createElement('label');
    let idFor = prompt("Introduce el id del campo al que estara asociado");
    let text = prompt("Introduce el texto que aparecera")
    labelCreado.setAttribute('for', idFor);
    document.getElementById('myForm').appendChild(labelCreado);
    labelCreado.innerHTML = text;
}

function createImage() {
    let imagenCreada = document.createElement('img');
    let src = prompt("Introduce la ruta que tiene la imagen ");
    document.getElementById('myForm').appendChild(imagenCreada);
    imagenCreada.src = src;
}

function createInputTypeCheckbox() {
    let name = prompt("Introduce el atributo name del checkbox");
    let valor = prompt("Introduce el atributo value del checkbox");
    let text = prompt("Introduce el texto que le acompana")
    let inputCreado = document.createElement("input")
    document.getElementById("myForm").appendChild(inputCreado);
    inputCreado.name = name;
    inputCreado.value = valor;
    inputCreado.type = "checkbox"
    inputCreado.textContent = text;
}

function createInputTypeRadio() {
    let name = prompt("Introduce el atributo name del radio");
    let valor = prompt("Introduce el atributo value del radio");
    let text = prompt("Introduce el texto que le acompana")
    let inputCreado = document.createElement("input")
    document.getElementById("myForm").appendChild(inputCreado);
    inputCreado.name = name;
    inputCreado.value = valor;
    inputCreado.type = "radio"
    inputCreado.textContent = text;
}

function createInputTypeSubmit() {
    let name = prompt("Introduce el atributo name del radio");
    let valor = prompt("Introduce el atributo value del radio");
    let inputCreado = document.createElement("input")
    document.getElementById("myForm").appendChild(inputCreado);
    inputCreado.name = name;
    inputCreado.value = valor;
    inputCreado.type = "submit"
}