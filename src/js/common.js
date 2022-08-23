(function () {

    let data = [{
        id: 1,
        name: 'Lanvin Marry Me edt 100 мл',
        price: `<div class="card-price">
                                <span class="price-main discount">260 грн</span>
                                <span class="price-old">380 грн</span>
                            </div>`,
        images: [
            {
                image: './dist/images/510202_1_1648045399.jpg'
            }
        ],
        description: `Інгалятор з мелатоніном для глибокого,
                            високоякісного сну та повного відпочинку. Сприяє міцному сну, виступає як потужний
                            релаксант, прискорює засипання, зменшуючи загальний рівень стресу, тривоги та нервова
                            напруга<br><br>Рекомендується по 5 інгаляцій, перед сном.<br><br>Склад:<br>
                            <ul>
                                <li>Пропіленгліколь</li>
                                <li>рослинний гліцерин</li>
                                <li>L-теанин</li>
                                <li>Мелатонін</li>
                                <li>Натуральна ромашка</li>
                            </ul>`
    }];

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
        let text = 'Giorgio Armani Si Parfum 100 мл тестер',
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

    let toTop = document.querySelector('.to-top'),
        modal = document.querySelector('.show-more-content.sleep'),
        callOrder = document.querySelectorAll('.call-order'),
        orderWrapper = document.querySelector('.order__wrapper'),
        orderClose = document.querySelector('.order-close'),
        main = document.querySelector('body');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 1000) {
            toTop.classList.add('active');
        } else {
            toTop.classList.remove('active');
        }
    });

    callOrder.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            orderWrapper.classList.add('active');
            item.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
        });
    });

    orderClose.addEventListener('click', () => {
        orderClose.parentElement.classList.remove('active');
    });

    let displayDescription = () => {
        console.log(data[0])
    }

    main.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('show-more')) {
            modal.classList.add('active');
            displayDescription();
        }

        if (target.classList.contains('show-more-close')) {
            modal.classList.remove('active');
        }
    });

})();