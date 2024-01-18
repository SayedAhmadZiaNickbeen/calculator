document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.text');
    const buttons = document.querySelectorAll('.val, .operator');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(this.value);
        });
    });

    function handleButtonClick(value) {
        if (value === 'AC') {
            input.value = '';
        } else if (value === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    }
});
