import "./style.css";
const gameDiv = document.getElementById("game");
const startDiv = document.getElementById("start");

const name = document.getElementById("nombre");
const level = document.getElementById("dificultad");
const startButton = document.getElementById("startGame");

const welcomeMessageElement = document.getElementById("bienvenida");
let mainText = document.getElementById("main-txt");
let body = document.getElementById("body");

let numeroSecreto = 0;
let intentos = 0;
startButton.addEventListener("click", () => {
  if (name.value === "") {
    alert("Por favor, ingresa tu nombre para comenzar el juego.");
    return;
  }
  let message = `¡Bienvenido ${name.value}! Has seleccionado la dificultad ${level.value}. ¡Comencemos el juego!`;
  welcomeMessageElement.innerText = message;
  if (level.value === "facil") {
    numeroSecreto = Math.floor(Math.random() * 50) + 1;
    mainText.innerText =
      "La computadora ha generado un número entre 1 y 50. ¡Adivínalo!";
    body.style.backgroundImage =  "linear-gradient(180deg,rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)";
    startDiv.style.display = "none";
    gameDiv.style.display = "block";
  } else if (level.value === "medio") {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    mainText.innerText =
      "La computadora ha generado un número entre 1 y 100. ¡Adivínalo!";
    body.style.backgroundImage =  "linear-gradient(180deg,rgba(237, 221, 83, 1) 50%, rgba(237, 150, 83, 1) 100%)";
    startDiv.style.display = "none";
    gameDiv.style.display = "block";
  } else if (level.value === "dificil") {
    numeroSecreto = Math.floor(Math.random() * 200) + 1;
    mainText.innerText =
      "La computadora ha generado un número entre 1 y 200. ¡Adivínalo!";
    body.style.backgroundImage =
      "linear-gradient(180deg,rgba(237, 150, 83, 1) 50%, rgba(237, 83, 83, 1) 100%)";

    startDiv.style.display = "none";
    gameDiv.style.display = "block";
  }
});

const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const mensaje = document.getElementById("mensaje");
const rebootButton = document.getElementById("reiniciar");

botonAdivinar.addEventListener("click", () => {
  const numeroJugador = parseInt(inputNumero.value);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
  } else if (numeroJugador === numeroSecreto) {
    mensaje.textContent = "¡Felicidades! ¡Adivinaste el número!";
  } else if (numeroJugador < numeroSecreto) {
    mensaje.textContent = "El número es más alto.";
  } else {
    mensaje.textContent = "El número es más bajo.";
  }
});

rebootButton.addEventListener("click", () => {
  location.reload();
});
