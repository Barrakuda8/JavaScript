window.onload = function () {

    function validate(el, reg) {
        if(!reg.test(el.value)) {
            el.style.border = '1px solid red';
            if(!document.querySelector(`#${el.id}-span`)) {
                el.insertAdjacentHTML('afterend', `<span id='${el.id}-span'>Некорректный ввод</span>`);
            }
        } else {
            el.style.border = '1px solid black';
            if(document.querySelector(`#${el.id}-span`)) {
                document.querySelector(`#${el.id}-span`).remove();
            }
        }
    };

    document.querySelector('button').addEventListener('click', function () {
        validate(document.querySelector('#name'), /^[\w]+$/);
        validate(document.querySelector('#number'), /^\+\d\(\d{3}\)\d{3}-\d{4}$/);
        validate(document.querySelector('#email'), /^\w+(\.|-)?\w+@mail\.ru$/);
        validate(document.querySelector('#text'), /^.+$/);
    });
}