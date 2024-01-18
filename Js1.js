let text = document.getElementById('text');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            text.value = screenValue;
        } else if (buttonText == 'AC') {
            // Clear the entire input
            screenValue = '';
            text.value = screenValue;
        } else if (buttonText == '=') {
            try {
                text.value = eval(screenValue);
            } catch (error) {
                text.value = 'Error';
            }
        } else if (buttonText == 'DEL') {
            // Delete the last character
            screenValue = screenValue.slice(0, -1);
            text.value = screenValue;
        } else {
            screenValue += buttonText;
            text.value = screenValue;
        }
    });
}
