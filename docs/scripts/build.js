(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const tabs = require('./tabs');
const validateForm = require('./validateform');
tabs();
validateForm();

},{"./tabs":2,"./validateform":3}],2:[function(require,module,exports){
function tabs() {
    let triggers = document.querySelectorAll('.nav__item');
    let i;

    for (i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', showTab);
    }

    function showTab(event) {
        let $this = event.target.closest('.nav__item');
        let id = $this.getAttribute('href');
        let nextContent = document.querySelector(id);
        let prevItem = document.querySelector('.nav__item.--active');
        let prevContent = document.querySelector('.form.--visible');

        event.preventDefault();
        prevContent.classList.remove('--visible');
        nextContent.classList.add('--visible');
        prevItem.classList.remove('--active');
        $this.classList.add('--active');
    }
}

module.exports = tabs;

},{}],3:[function(require,module,exports){
function validateForm() {
    const cardNumberInput = document.getElementById('cardNo');
    const pattern = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;

    cardNumberInput.addEventListener('input', formatCardNo);
    name.addEventListener('input', formatTextOnly);
    fullName.addEventListener('input', formatTextOnly);

    function formatCardNo() {
        let value = cardNumberInput.value;
        let buffer = '';

        if (value != '') {

            if (!value.match(pattern)) {
                let length;

                for (let i = 0; i < value.length; i++) {
                    if (value[i].match(/\d/)) {
                        buffer += value[i];
                    }

                    length = buffer.length;
                    if (buffer && length % 5 == 0) {
                        let c = buffer[length - 1];
                        buffer = buffer.slice(0, length - 1) + ' ' + c;
                    }
                }
            } else {
                buffer = value.match(pattern)[0];
            }

            cardNumberInput.value = buffer;
        }
    }
}

module.exports = validateForm;

},{}]},{},[1])

//# sourceMappingURL=build.js.map
