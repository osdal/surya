// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', () => {

    let mobileMenu = document.querySelectorAll('.header__menu .menu__list>li');
    let subMenu = document.querySelectorAll('.sub-menu');
    let menuIcon = document.querySelector('.menu__icon');

    menuIcon.addEventListener('click', ()=>{
        subMenu.forEach(item=>{
            item.style.maxHeight = 0;
        });
    });

    function addActiveClass(menu) {
        menu.forEach(element => {
            element.addEventListener('click', function () {
                menu.forEach(item => {
                    item.classList.remove('active');
                    subMenu.forEach(item => {
                        item.style.maxHeight = 0;
                    });
                    if(element.querySelector('.sub-menu').style.maxHeight != 0) {
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
    addActiveClass(mobileMenu);

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

    // Пример использования функции
    // smoothIncreaseMaxHeight(0, 50); // начальное значение 0%, интервал 50 миллисекунд 
})