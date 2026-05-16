console.log("Inicio del programa");
setTimeout (()=>{
    console.log("Ejecutando el timeout despues de 2 segundos");
},2000);
console.log("Fin del programa");


console.log("------------------------------");

//Event loop para la interaccion con el usuario
button.addEventListener("click", () => {
  console.log("Botón presionado");
});
button.addEventListener("click", ()=>{
    console.log("Otro evento de click");
});