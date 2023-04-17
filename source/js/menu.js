const headerToggle = document.querySelector('.header__toggle')
const header = document.querySelector('.header')

header.classList.remove('no-js');
headerToggle.addEventListener('click', () => header.classList.toggle('is-open'));
