{
    const slideOutMenu = () => {
        const button = document.querySelector('.js-button');
        const menu = document.querySelector('.js-list');

        button.addEventListener('click', () => {
            menu.classList.toggle('active');
        })
    };

    const init = () => {
        slideOutMenu();
    };

    init();
}