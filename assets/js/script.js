const num1 = document.querySelector("#num1");
const input = document.querySelector("num2");
const precio = 400000;
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");
const cantidad = document.querySelector("#cantidad");
const text = document.querySelector("#color");

btn.addEventListener("click", () => {
    const a = precio;
    const b = num1.value;

    resultado.innerHTML = a * b;
    cantidad.innerHTML = num1.value;
});

btn.addEventListener("click", () => {
    text.style.color = num2.value;
});
