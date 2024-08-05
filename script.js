document.addEventListener('DOMContentLoaded', () => {
    const fontSelector = document.getElementById('fontSelector');
    const userText = document.getElementById('userText');
    const outputText = document.getElementById('outputText');

    outputText.style.fontFamily = fontSelector.value;

    fontSelector.addEventListener('change', () => {
        outputText.style.fontFamily = fontSelector.value;
    });

    userText.addEventListener('input', () => {
        outputText.textContent = userText.value;
    });
});
