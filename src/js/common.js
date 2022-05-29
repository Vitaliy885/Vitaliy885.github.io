(function () {

    let mySiema = new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: {
            768: 2,
            1024: 2,
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
    });
    document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.next').addEventListener('click', () => mySiema.next());

    document.querySelector('.to-top').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $('.scrollTo').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 500
        }, 500);
        return false;
    });

    let overlay = document.querySelector('.overlay');

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
        let text = 'ІНГАЛЯТОР із вітамінами Hvape',
            result = document.querySelector('.typing-text');

        let print_text = function (text, result, delay) {
            if (text.length > 0) {
                result.innerHTML += text[0];
                setTimeout(
                    function () {
                        print_text(text.slice(1), result, 100);
                    }, 100
                );
            }
        }

        setInterval(print_text(text, result, 100), 2000);
    });

})();