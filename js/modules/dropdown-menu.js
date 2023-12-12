import outsideClick from './clickoutside.js';

export default function initDropdownMenu() {
  const dropdowMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();

    this.classList.add('active');

    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }

  dropdowMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
