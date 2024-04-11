const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputText = textInput.value.trim().toLowerCase();
  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  // Remove non-alphanumeric characters and spaces
  const cleanedText = inputText.replace(/[^a-z0-9]/g, "");

  const reversedText = cleanedText.split("").reverse().join("");
  if (cleanedText === reversedText) {
    resultElement.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultElement.textContent = `${textInput.value} is not a palindrome`;
  }
});
