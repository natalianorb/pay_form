function validateForm() {
    const cardNumberInput = document.getElementById('cardNo');
    const pattern = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;

    cardNumberInput.addEventListener('input', formatCardNo);
    name.addEventListener('input', formatTextOnly);
    fullName.addEventListener('input', formatTextOnly)

    function formatCardNo() {
        let value = cardNumberInput.value;
        let buffer = '';

        if (value != '') {

            if (!value.match(pattern)) {
                let length;

                for(let i = 0; i < value.length; i++) {
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