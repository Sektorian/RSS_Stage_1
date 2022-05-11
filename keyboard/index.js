
let keyCode1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
let keyCode2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
let keyCode3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
let keyCode4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let keyCode5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

let keyName1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let keyName2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let keyName3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
let keyName4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'];
let keyName5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9650;', '&#9650;', '&#9650;', 'Ctrl'];

let keyShiftName = ['~', '!', '@', '#', '$', '%', '^', '&#38;', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '&#8249;', '&#8250;', '?'];
let keyName = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/'];

let keyRuName1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let keyRuName2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
let keyRuName3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
let keyRuName4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'];

//============ Добавляем textarea ===============

let text = document.createElement('textarea');
text.classList.add('keyboard__textarea');
document.body.appendChild(text);

//============ Добавляем тело клавиатуры ===============

let divKB2 = document.createElement('div');
divKB2.classList.add('keyboard__body');
document.body.appendChild(divKB2);

//============ Добавляем ряды клавиш ===============

(function showRowCode1() {
    let buttons = '';

    for (let i = 0; i < keyCode1.length; i++) {
        buttons += `<div class="keyboard__dbutton lan" data="${keyCode1[i]}"></div>`;
    }
    let divRow = document.createElement('div');
    divRow.classList.add('keyboard__row');
    divRow.innerHTML = buttons;

    divKB2.appendChild(divRow);
    let docx = document.querySelector('[data="Backspace"]');
    docx.classList.remove('keyboard__dbutton');
    docx.classList.add('keyboard__fbutton');
    docx.classList.add('key-backspace');
})();

(function showRowCode2() {

    let buttons = '';

    for (let i = 0; i < keyCode2.length; i++) {
        buttons += `<div class="keyboard__button lan" data="${keyCode2[i]}"></div>`;
    }
    let divRow = document.createElement('div');
    divRow.classList.add('keyboard__row');
    divRow.innerHTML = buttons;

    divKB2.appendChild(divRow);
    
    let dTab = document.querySelector('[data="Tab"]');
    dTab.classList.remove('keyboard__button');
    dTab.classList.add('keyboard__fbutton');
    dTab.classList.add('key-tab');

    let dBrL = document.querySelector('[data="BracketLeft"]');
    dBrL.classList.remove('keyboard__button');
    dBrL.classList.add('keyboard__dbutton');

    let dBrR = document.querySelector('[data="BracketRight"]');
    dBrR.classList.remove('keyboard__button');
    dBrR.classList.add('keyboard__dbutton');

    let dBcksl = document.querySelector('[data="Backslash"]');
    dBcksl.classList.remove('keyboard__button');
    dBcksl.classList.add('keyboard__dbutton');

    let dDel = document.querySelector('[data="Delete"]');
    dDel.classList.remove('keyboard__button');
    dDel.classList.add('keyboard__fbutton');
    dDel.classList.add('key-del');
    
})();

(function showRowCode3() {

    let buttons = '';

    for (let i = 0; i < keyCode3.length; i++) {
        buttons += `<div class="keyboard__button lan" data="${keyCode3[i]}"></div>`;
    }
    let divRow = document.createElement('div');
    divRow.classList.add('keyboard__row');
    divRow.innerHTML = buttons;

    divKB2.appendChild(divRow);
    
    let dCaps = document.querySelector('[data="CapsLock"]');
    dCaps.classList.remove('keyboard__button');
    dCaps.classList.add('keyboard__fbutton');
    dCaps.classList.add('key-caps');

    let dSmc = document.querySelector('[data="Semicolon"]');
    dSmc.classList.remove('keyboard__button');
    dSmc.classList.add('keyboard__dbutton');

    let dQuote = document.querySelector('[data="Quote"]');
    dQuote.classList.remove('keyboard__button');
    dQuote.classList.add('keyboard__dbutton');

    let dEnter = document.querySelector('[data="Enter"]');
    dEnter.classList.remove('keyboard__button');
    dEnter.classList.add('keyboard__fbutton');
    dEnter.classList.add('key-enter');
    
})();

(function showRowCode4() {

    let buttons = '';

    for (let i = 0; i < keyCode4.length; i++) {
        buttons += `<div class="keyboard__button lan" data="${keyCode4[i]}"></div>`;
    }
    let divRow = document.createElement('div');
    divRow.classList.add('keyboard__row');
    divRow.innerHTML = buttons;

    divKB2.appendChild(divRow);
    
    let dShiftL = document.querySelector('[data="ShiftLeft"]');
    dShiftL.classList.remove('keyboard__button');
    dShiftL.classList.add('keyboard__fbutton');
    dShiftL.classList.add('key-shift');

    'Comma', 'Period', 'Slash'
    let dComma = document.querySelector('[data="Comma"]');
    dComma.classList.remove('keyboard__button');
    dComma.classList.add('keyboard__dbutton');

    let dPeriod = document.querySelector('[data="Period"]');
    dPeriod.classList.remove('keyboard__button');
    dPeriod.classList.add('keyboard__dbutton');

    let dSlash = document.querySelector('[data="Slash"]');
    dSlash.classList.remove('keyboard__button');
    dSlash.classList.add('keyboard__dbutton');

    let dArrowUp = document.querySelector('[data="ArrowUp"]');
    dArrowUp.classList.remove('keyboard__button');
    dArrowUp.classList.add('keyboard__fbutton');
    dArrowUp.classList.add('key-up');

    let dShiftR = document.querySelector('[data="ShiftRight"]');
    dShiftR.classList.remove('keyboard__button');
    dShiftR.classList.add('keyboard__fbutton');
    dShiftR.classList.add('key-shift');
    
})();

(function showRowCode5() {

    let buttons = '';

    for (let i = 0; i < keyCode5.length; i++) {
        buttons += `<div class="keyboard__fbutton" data="${keyCode5[i]}">${keyName5[i]}</div>`;
    }
    let divRow = document.createElement('div');
    divRow.classList.add('keyboard__row');
    divRow.innerHTML = buttons;

    divKB2.appendChild(divRow);
    
    let dSpace = document.querySelector('[data="Space"]');
    dSpace.classList.remove('keyboard__fbutton');
    dSpace.classList.add('keyboard__button');
    dSpace.classList.add('key-space');

    let dCtrlL = document.querySelector('[data="ControlLeft"]');
    dCtrlL.classList.add('key-ctrl');

    let dCtrlR = document.querySelector('[data="ControlRight"]');
    dCtrlR.classList.add('key-ctrl');

    let dWin = document.querySelector('[data="MetaLeft"]');
    dWin.classList.add('key-win');

    let dAltL = document.querySelector('[data="AltLeft"]');
    dAltL.classList.add('key-alt');

    let dAltR = document.querySelector('[data="AltRight"]');
    dAltR.classList.add('key-alt');

    let dArrowL = document.querySelector('[data="ArrowLeft"]');
    dArrowL.classList.add('key-left');

    let dArrowD = document.querySelector('[data="ArrowDown"]');
    dArrowD.classList.add('key-down');

    let dArrowR = document.querySelector('[data="ArrowRight"]');
    dArrowR.classList.add('key-right');
    
})();

//============ Информация ===============
let changeInf = document.createElement('h3');
changeInf.classList.add('keyboard__change');
changeInf.innerHTML = 'Клавиатура создана в операционной системе Windows <br><br> Для переключения языка комбинация: левыe ctrl + alt'
document.body.appendChild(changeInf);

//============ Добавляем функционал ===============

(function Listner() {
    const txtArea = document.querySelector('.keyboard__textarea');
    const btns = document.querySelectorAll('.keyboard__button');
    const dbtns = document.querySelectorAll('.keyboard__dbutton');
    const btnBspc = document.querySelector('.key-backspace');
    const btnTab = document.querySelector('.key-tab');
    const btnDel = document.querySelector('.key-del');
    const btnEnter = document.querySelector('.key-enter');
    const btnCaps = document.querySelector('.key-caps');
    const btnLeft = document.querySelector('.key-left');
    const btnUp = document.querySelector('.key-up');
    const btnDown = document.querySelector('.key-down');
    const btnRight = document.querySelector('.key-right');
    let coutnCaps = 0;
    txtArea.focus();
    changeLan(localStorage.getItem('language'));
    
//============ Mouse ===============
    
    document.addEventListener('click', () => {
        txtArea.focus();
    });

    btns.forEach((e) => {
        e.addEventListener('click', () => {
            txtArea.value += e.innerHTML;
        });
    });

    dbtns.forEach((e) => {
        e.addEventListener('click', () => {
            txtArea.value += e.innerHTML;
        });
    });

    btnBspc.addEventListener('click', () => {
        let pos = txtArea.selectionStart;
        let arr = txtArea.value.split('');
        arr.splice(pos-1, 1);
        txtArea.value = arr.join('');
        txtArea.setSelectionRange(pos-1, pos-1);
    });

    btnDel.addEventListener('click', () => {
        let pos = txtArea.selectionStart;
        let arr = txtArea.value.split('');
        arr.splice(pos, 1);
        txtArea.value = arr.join('');
        txtArea.setSelectionRange(pos, pos);
    });

    btnTab.addEventListener('click', () => {
        txtArea.value += '    ';
    });

    btnEnter.addEventListener('click', () => {
        let pos = txtArea.selectionStart;
        let arr = txtArea.value.split('');
        arr.splice(pos, 0, '\n');
        txtArea.value = arr.join('');
        txtArea.setSelectionRange(pos+1, pos+1);
        
    });

    btnCaps.addEventListener('click', () => {
        btnCaps.classList.toggle('key-caps_active');
        coutnCaps++;
        if (coutnCaps % 2 === 0) {
            for (let i = 0; i < btns.length; i++) {
                let btnName = btns[i].innerHTML;
                btns[i].innerHTML = btnName.toLowerCase();
            }
            for (let i = 0; i < dbtns.length; i++) {
                dbtns[i].innerHTML = keyName[i];
            }
        } else {
            for (let i = 0; i < btns.length; i++) {
                let btnName = btns[i].innerHTML;
                btns[i].innerHTML = btnName.toUpperCase();
            }
            for (let i = 0; i < dbtns.length; i++) {
                dbtns[i].innerHTML = keyShiftName[i];
            }
        }
    });

    btnLeft.addEventListener('click', () => {
        txtArea.value += String.fromCharCode(5130);
    });
    btnUp.addEventListener('click', () => {
        txtArea.value += String.fromCharCode(5123);
    });
    btnDown.addEventListener('click', () => {
        txtArea.value += String.fromCharCode(5121);
    });
    btnRight.addEventListener('click', () => {
        txtArea.value += String.fromCharCode(5125);
    });

//============ Keyboard ===============
    
    window.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.code !== "ShiftLeft" && e.code !== "ShiftRight" && e.code !== "ControlLeft" && e.code !== "ControlRight" && e.code !== "AltLeft" && e.code !== "AltRight" && e.code !== "CapsLock" && e.code !== "Backspace" && e.code !== "Tab" && e.code !== "Enter"
            && e.code !== "ArrowLeft" && e.code !== "ArrowRight" && e.code !== "ArrowUp" && e.code !== "ArrowDown" && e.code !== "Delete") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += doc.innerHTML;
        }
        if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            for (let i = 0; i < btns.length; i++) {
                let btnName = btns[i].innerHTML;
                btns[i].innerHTML = btnName.toUpperCase();
            }
            for (let i = 0; i < dbtns.length; i++) {
                dbtns[i].innerHTML = keyShiftName[i];
            }

        }
        if (e.code === "ControlLeft" || e.code === "ControlRight" || e.code === "AltLeft" || e.code === "AltRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
        }
        if (e.code === "CapsLock") {
            coutnCaps++;
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            doc.classList.toggle('key-caps_active');
            if (coutnCaps % 2 === 0) {
                for (let i = 0; i < btns.length; i++) {
                    let btnName = btns[i].innerHTML;
                    btns[i].innerHTML = btnName.toLowerCase();
                }
                for (let i = 0; i < dbtns.length; i++) {
                    dbtns[i].innerHTML = keyName[i];
                }
            } else {
                for (let i = 0; i < btns.length; i++) {
                    let btnName = btns[i].innerHTML;
                    btns[i].innerHTML = btnName.toUpperCase();
                }
                for (let i = 0; i < dbtns.length; i++) {
                    dbtns[i].innerHTML = keyShiftName[i];
                }
            }
        }
        if (e.code === "Backspace") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            let pos = txtArea.selectionStart;
            let arr = txtArea.value.split('');
            arr.splice(pos-1, 1);
            txtArea.value = arr.join('');
            txtArea.setSelectionRange(pos-1, pos-1);
        }
        if (e.code === "Tab") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += '    ';
        }
        if (e.code === "Enter") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            let pos = txtArea.selectionStart;
            let arr = txtArea.value.split('');
            arr.splice(pos, 0, '\n');
            txtArea.value = arr.join('');
            txtArea.setSelectionRange(pos+1, pos+1);
        }
        if (e.code === "Delete") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            let pos = txtArea.selectionStart;
            let arr = txtArea.value.split('');
            arr.splice(pos, 1);
            txtArea.value = arr.join('');
            txtArea.setSelectionRange(pos, pos);
        }
        if (e.code === "ArrowLeft") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += String.fromCharCode(5130);
        }
        if (e.code === "ArrowRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += String.fromCharCode(5125);
        }
        if (e.code === "ArrowUp") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += String.fromCharCode(5123);
        }
        if (e.code === "ArrowDown") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.add('keyboard__button_active');
            txtArea.value += String.fromCharCode(5121);
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.code !== "ShiftLeft" && e.code !== "ShiftRight" && e.code !== "ControlLeft" && e.code !== "ControlRight" && e.code !== "AltLeft" && e.code !== "AltRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.remove('keyboard__button_active');
        }
        if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.remove('keyboard__button_active');
            for (let i = 0; i < btns.length; i++) {
                let btnName = btns[i].innerHTML;
                btns[i].innerHTML = btnName.toLowerCase();
            }
            for (let i = 0; i < dbtns.length; i++) {
                dbtns[i].innerHTML = keyName[i];
            }
        }
        if (e.code === "ControlLeft" || e.code === "ControlRight" || e.code === "AltLeft" || e.code === "AltRight") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.remove('keyboard__button_active');
        }
        if (e.code === "CapsLock") {
            let doc = document.querySelector(`[data="${e.code}"]`);
            doc.classList.remove('keyboard__button_active');
        }
    });

    document.addEventListener('keydown', function(e) {      //======= Переключение языков =========
        if (e.ctrlKey && e.altKey) {

            let language = localStorage.getItem('language');
            if (language === 'ru') {
                language = 'en';
                changeLan(language);
                localStorage.removeItem('language');
                localStorage.setItem('language', `${language}`);
            } else {
                language = 'ru';
                changeLan(language);
                localStorage.removeItem('language');
                localStorage.setItem('language', `${language}`);
            }
        }
    });
})();

function changeLan(lan) {
    if (lan === 'ru') {
                
        let ru = document.querySelectorAll('.lan');
        for (let i = 0; i < 14; i++) {
            ru[i].innerHTML = keyRuName1[i];
        }
        
        for (let i = 14; i < 29; i++) {
            ru[i].innerHTML = keyRuName2[i-14];
        }
        
        for (let i = 29; i < 42; i++) {
            ru[i].innerHTML = keyRuName3[i-29];
        }
        for (let i = 42; i < 55; i++) {
            ru[i].innerHTML = keyRuName4[i-42];
        }
        
    } else {
        let en = document.querySelectorAll('.lan');
        for (let i = 0; i < 14; i++) {
            en[i].innerHTML = keyName1[i];
        }
        
        for (let i = 14; i < 29; i++) {
            en[i].innerHTML = keyName2[i-14];
        }
        
        for (let i = 29; i < 42; i++) {
            en[i].innerHTML = keyName3[i-29];
        }
        for (let i = 42; i < 55; i++) {
            en[i].innerHTML = keyName4[i-42];
        }
    }
}