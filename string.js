/* file: script.js */
const extendBox = () => {
    const box = document.getElementById('box');
    const result = document.getElementById('result');
    box.style.height = '150px';
    result.style.marginTop = '20px';
}

const isPalindrome = () => {
    const result = document.getElementById('result');
    const textInput = document.getElementById('text-input');
    
    const checkButton = document.getElementById('check-btn');

    checkButton.addEventListener('click', () => {
        let emptyValue = textInput.value.trim();

        const inputValue = textInput.value;
    
        const validInput = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        const lowercasedValue = validInput.toLowerCase();
        const reversedValue = lowercasedValue.split('').reverse().join('');

      if (emptyValue === '') {
        alert("Please input a value");
    } else {
        if (lowercasedValue === reversedValue) {
            extendBox();
            result.innerHTML = `${inputValue} is a palindrome!`;
        } else {
            extendBox();
            result.innerHTML = `${inputValue} is not a palindrome!`;
        }
    }

    
}
)
}