let menuItems = document.querySelectorAll('.icon-menu');
let mainMenuItems = document.querySelectorAll('.main-menu-mobile');

export function menuClicked() {
    menuItems.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('icon-menu-clicked');
        });
    })
}

export function menuIconHide() {
    menuItems.forEach((icon) => {
        icon.addEventListener('click', () => {
            // Добавляем класс "dnone" всем элементам, кроме текущего
            menuItems.forEach(function (menu) {
                if (menu !== icon) {
                    menu.classList.add('dnone');
                }
            });

        })
    })
};

export function menuCount() {
    // for (let i = 0; i < mainMenuItems.length; i++) {
    //     mainMenuItems[i].classList.add(`menu-item-${i + 1}`);
    // }
}

export function menuBodyWayUp() {
    mainMenuItems.forEach(menu => {
        menu.addEventListener('click', () => {
            menu.querySelector('.menu__body').classList.remove('z-index-10')
            if (menu.querySelector('.icon-menu-clicked')) {
                menu.querySelector('.menu__body').classList.toggle('z-index-10')
                // menu.classList.toggle('z-index-10')
            }
        })
        // if (menu.classList.contains('icon-menu-clicked')) {
        //     console.log(menu);
        //     menu.querySelector('.menu__body').classList.add('z-index-10')
        // } else { 
        //     menu.querySelector('.menu__body').classList.remove('z-index-10')
        // }
    })
}