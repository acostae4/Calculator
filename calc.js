const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-clear]');
const deleteOperation = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals');
const decimal = document.querySelector('[data-decimal]');

const preview = document.querySelector('[data-preview]');
const current = document.querySelector('[data-current]');

var currentDisplay = '0';

//updateDisplay function
var updateDisplay = (clickedBtn) => {
    var innerBtn = clickedBtn.target.innerText;
    if(currentDisplay === '0'){
        currentDisplay = '';
    }
    currentDisplay += innerBtn;
    current.innerText = currentDisplay;
};

var computeOperations = (clickedBtn) => {
    var compBtn = clickedBtn.target.innerText;
    switch (compBtn) {
        case '/':
            if(currentDisplay === '0') return;
            if(currentDisplay.includes('/')) return;
            this.currentDisplay += compBtn;
            current.innerText = this.currentDisplay;
            break;
        case '*':
            if(currentDisplay === '0') return;
            if(currentDisplay.includes('*')) return;
            this.currentDisplay += compBtn;
            current.innerText = this.currentDisplay;
            break;
        case '+':
            if(currentDisplay === '0') return;
            if(currentDisplay.includes('*')) return;
            this.currentDisplay += compBtn;
            current.innerText = this.currentDisplay;
            break;
        case '-':
            if(currentDisplay === '0') return;
            if(currentDisplay.includes('-')) return;
            this.currentDisplay += compBtn;
            current.innerText = this.currentDisplay;
            break;
        case '=':
            if(currentDisplay === '0') return;
            if(currentDisplay.includes('=')) return;
            var formattedOutput = eval(this.currentDisplay);
            preview.innerText = formattedOutput.toFixed(4);
            currentDisplay = preview.innerText
            break;
        default:
            break;
    }
};

//display numbers to current screen
numbers.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

operations.forEach(button => {
    button.addEventListener('click', computeOperations);
});

allClear.onclick = () => {
    currentDisplay = '0';
    preview.innerText = '';
    current.innerText = currentDisplay;
};

deleteOperation.onclick = () => {
    let displayLength = currentDisplay.length;
    if(currentDisplay === '0') return;
    currentDisplay = currentDisplay.slice(0, displayLength - 1);
    current.innerText = currentDisplay;
};

decimal.onclick = () => {
    if(!currentDisplay.includes('.')){
        currentDisplay += '.';
        current.innerText = currentDisplay;
    }
}