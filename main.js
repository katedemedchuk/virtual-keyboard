/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
const textAreaAttributes = {
    name: 'textarea',
    id: 'textarea',
    cols: '25',
    rows: '15',
    placeholder: 'Type your text here (made for Windows)',
};

function createTextArea() {
    const textArea = document.createElement('textarea');
    Object.entries(textAreaAttributes).forEach((element) => {
        textArea.setAttribute(element[0], element[1]);
    });
    return textArea;
}

let Language = localStorage.value || 'en';

const TEXTAREA = createTextArea();

const keyboardDesc = [
    // row1
    [{ className: 'Backquote', en: ['`', '~'], },
        { className: 'Digit1', en: ['1', '!'], },
        { className: 'Digit2', en: ['2', '@'], },
        { className: 'Digit3', en: ['3', '#'], },
        { className: 'Digit4', en: ['4', '$'], },
        { className: 'Digit5', en: ['5', '%'], },
        { className: 'Digit6', en: ['6', '^'], },
        { className: 'Digit7', en: ['7', '&'], },
        { className: 'Digit8', en: ['8', '*'], },
        { className: 'Digit9', en: ['9', '('], },
        { className: 'Digit0', en: ['0', ')'], },
        { className: 'Minus', en: ['-', '_'], },
        { className: 'Equal', en: ['=', '+'], },
        { className: 'Backspace', Backspace: 'Backspace', },
    ],
    // row2
    [{ className: 'Tab', Tab: 'Tab' },
        { className: 'KeyQ', en: ['q', 'Q'], },
        { className: 'KeyW', en: ['w', 'W'], },
        { className: 'KeyE', en: ['e', 'E'], },
        { className: 'KeyR', en: ['r', 'R'], },
        { className: 'KeyT', en: ['t', 'T'], },
        { className: 'KeyY', en: ['y', 'Y'], },
        { className: 'KeyU', en: ['u', 'U'], },
        { className: 'KeyI', en: ['i', 'I'], },
        { className: 'KeyO', en: ['o', 'O'], },
        { className: 'KeyP', en: ['p', 'P'], },
        { className: 'BracketLeft', en: ['[', '{'], },
        { className: 'BracketRight', en: [']', '}'], },
        { className: 'Backslash', en: ['\\', '|'], },
        { className: 'Delete', Del: 'Del' }
    ],
    // row3
    [{ className: 'CapsLock', CapsLock: 'Caps Lock' },
        { className: 'KeyA', en: ['a', 'A'] },
        { className: 'KeyS', en: ['s', 'S'] },
        { className: 'KeyD', en: ['d', 'D'] },
        { className: 'KeyF', en: ['f', 'F'] },
        { className: 'KeyG', en: ['g', 'G'] },
        { className: 'KeyH', en: ['h', 'H'] },
        { className: 'KeyJ', en: ['j', 'J'] },
        { className: 'KeyK', en: ['k', 'K'] },
        { className: 'KeyL', en: ['l', 'L'] },
        { className: 'Semicolon', en: [';', ':'] },
        { className: 'Quote', en: ['\'', '"'] },
        { className: 'Enter', Enter: 'Enter' }
    ],
    // row4
    [{ className: 'ShiftLeft', Shift: 'Shift' },
        { className: 'KeyZ', en: ['z', 'Z'] },
        { className: 'KeyX', en: ['x', 'X'] },
        { className: 'KeyC', en: ['c', 'C'] },
        { className: 'KeyV', en: ['v', 'V'] },
        { className: 'KeyB', en: ['b', 'B'] },
        { className: 'KeyN', en: ['n', 'N'] },
        { className: 'KeyM', en: ['m', 'M'] },
        { className: 'Comma', en: [',', '<'] },
        { className: 'Period', en: ['.', '>'] },
        { className: 'Slash', en: ['/', '?'] },
        { className: 'ArrowUp', up: '▲' },
        { className: 'ShiftRight', Shift: 'Shift' }
    ],
    // row5
    [{ className: 'ControlLeft', Ctrl: 'Ctrl' },
        { className: 'Meta', Win: 'Win' },
        { className: 'AltLeft', Alt: 'Alt' },
        { className: 'Space', Space: 'Space' },
        { className: 'AltRight', Alt: 'Alt' },
        { className: 'ControlRight', Ctrl: 'Ctrl' },
        { className: 'ArrowLeft', left: '◄' },
        { className: 'ArrowDown', down: '▼' },
        { className: 'ArrowRight', right: '►' }
    ],
];

class KeyboardKey {
    constructor(options) {
        const keyButton = document.createElement('div');
        keyButton.classList.add('keyboard-key');
        keyButton.classList.add(options.className);
        if (Object.prototype.hasOwnProperty.call(options, 'en') && options.className !== 'Language') {
            keyButton.insertAdjacentHTML('afterbegin', options.en[0]);

        } else {
            keyButton.classList.add('functionKeys');
            keyButton.insertAdjacentHTML('afterbegin', Object.entries(options)[1][1]);
        }
        return keyButton;
    }
}

function createKeyboardRow(numberOfRow) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    keyboardDesc[numberOfRow].forEach((option) => {
        const newKey = new KeyboardKey(option);
        keyboardRow.insertAdjacentElement('beforeend', newKey);
    });
    return keyboardRow;
}

function createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    for (let i = 0; i < keyboardDesc.length; i += 1) {
        const newRow = createKeyboardRow(i);
        newRow.classList.add(`row${i}`);
        keyboard.insertAdjacentElement('beforeend', newRow);
    }
    return keyboard;
}

const KEYBOARD = createKeyboard();


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').appendChild(TEXTAREA);
    document.querySelector('body').appendChild(KEYBOARD);
});