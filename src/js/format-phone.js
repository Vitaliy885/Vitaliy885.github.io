class Formats {

    constructor() {

        let inputElement = document.querySelectorAll('.format__number');
        inputElement.forEach(function (number) {
            number.addEventListener('click', enforceFormat);
            number.addEventListener('keydown', enforceFormat);
            number.addEventListener('keyup', formatToPhone);
        });

        function isNumericInput(event) {
            const key = event.keyCode;
            return ((key >= 48 && key <= 57) || // Allow number line
                (key >= 96 && key <= 105) // Allow number pad
            );
        }

        function isModifierKey(event) {
            const key = event.keyCode;
            return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
                (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
                (key > 36 && key < 41) || // Allow left, up, right, down
                (
                    // Allow Ctrl/Command + A,C,V,X,Z
                    (event.ctrlKey === true || event.metaKey === true) &&
                    (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
                )
        }

        function enforceFormat(event) {
            // Input must be of a valid number format or a modifier key, and not longer than ten digits
            if (!isNumericInput(event) && !isModifierKey(event)) {
                event.preventDefault();
            }
        }

        function formatToPhone(event) {
            if (isModifierKey(event)) {
                return;
            }
            // I am lazy and don't like to type things more than once
            const target = event.target;
            const input = event.target.value.replace(/\D/g, '').substring(0, 12); // First ten digits of input only
            const zip = input.substring(3, 5);
            const code = input.substring(5, 8);
            const middle = input.substring(8, 10);
            const last = input.substring(10, 12);


            if (input.length > 10) {
                target.value = `+38(0${zip}) ${code}-${middle}-${last}`;
            } else if (input.length > 8) {
                target.value = `+38(0${zip}) ${code}-${middle}`;
            } else if (input.length > 5) {
                target.value = `+38(0${zip}) ${code}`;
            } else if (input.length > 3) {
                target.value = `+38(0${zip}`;
            } else if (input.length >= 0) {
                target.value = `+38(0${zip}`;
            }
        }

    }

}

let formats = new Formats();


