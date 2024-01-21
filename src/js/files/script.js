// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Подключение файлов
// import "./customMenu.js";
import { menuCount } from './customMenu.js';
import { menuClicked } from './customMenu.js';
import { menuBodyWayUp } from './customMenu.js';
import { menuIconHide } from './customMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    menuCount();
    menuClicked();
    menuBodyWayUp();
    menuIconHide();

    let mobileMenu = document.querySelectorAll('.menu__list>li');
    let subMenu = document.querySelectorAll('.sub-menu');
    let menuIcon = document.querySelectorAll('.menu__icon');

    menuIcon.forEach(icon => {
        icon.addEventListener('click', () => {
            subMenu.forEach(menu => {
                menu.style.maxHeight = 0;
            })
        })
    });

    addActiveClass(mobileMenu);
    function addActiveClass(menu) {
        menu.forEach(element => {
            element.addEventListener('click', function () {
                menu.forEach(item => {
                    item.classList.remove('active');
                    subMenu.forEach(item => {
                        item.style.maxHeight = 0;
                    });
                    if (element.querySelector('.sub-menu').style.maxHeight != 0) {
                        element.querySelector('.sub-menu').style.maxHeight = 0;
                    }
                });
                if (element.classList != 'active') {
                    element.classList.add('active');
                    if (element.querySelector('.sub-menu')) {
                        smoothIncreaseMaxHeight(0, 0, element.querySelector('.sub-menu'));
                    }
                }

            });
        });
    }


    function smoothIncreaseMaxHeight(initialValue, interval, subMenu) {

        // Устанавливаем текущее значение на начальное
        let presentValue = initialValue;

        // Устанавливаем интервал выполнения функции
        const intervalIdentifier = setInterval(() => {
            // Увеличиваем текущее значение на один шаг (например, 1%)
            presentValue = presentValue + 100;

            // Выводим текущее значение (можете заменить эту часть кода своей логикой)
            // console.log(`Текущее значение: ${presentValue}%`);
            subMenu.style.maxHeight = presentValue + "%";

            // Проверяем, достигли ли мы 100%
            if (presentValue >= 100) {
                // Если достигли, останавливаем интервал
                clearInterval(intervalIdentifier);
            }
        }, interval);
    }

    // Находим все ссылки на странице
    var links = document.querySelectorAll('.menu__item a');

    // Добавляем обработчик события для каждой ссылки
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Предотвращаем стандартное действие (переход по ссылке)
            event.preventDefault();

            // Ваш код, который будет выполняться вместо стандартного действия
            // Например, вы можете добавить свою логику обработки клика здесь

            // Если вы хотите все-таки перейти по ссылке после выполнения своего кода, вы можете использовать следующую строку
            // window.location.href = link.href;
        });
    });

})