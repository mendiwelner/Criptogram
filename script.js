const encodedMessage = "XZNN HVZN";
const decodedMessage = "שלום עולם";  // המשפט המקורי שצריך לפענח

function checkSolution() {
    const userInput = document.getElementById("decoded-input").value;
    const resultElement = document.getElementById("result");

    if (userInput === decodedMessage) {
        resultElement.textContent = "נכון! כל הכבוד!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "נסו שוב...";
        resultElement.style.color = "red";
    }
}
