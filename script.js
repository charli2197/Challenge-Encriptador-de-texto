// Selecciona los elementos del DOM
const inputTextArea = document.getElementById("input-text");
const outputTextArea = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");

// Función para encriptar texto
function encryptText(text) {
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

// Función para desencriptar texto
function decryptText(text) {
  let decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

// Evento para encriptar el texto
encryptBtn.addEventListener("click", () => {
  const text = inputTextArea.value;
  const encryptedText = encryptText(text);
  outputTextArea.value = encryptedText;
});

// Evento para desencriptar el texto
decryptBtn.addEventListener("click", () => {
  const text = inputTextArea.value;
  const decryptedText = decryptText(text);
  outputTextArea.value = decryptedText;
});
