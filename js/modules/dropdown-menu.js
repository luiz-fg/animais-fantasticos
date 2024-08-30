import outsideClick from './clickoutside.js';

export default class DropdownMenu {

  constructor(dropdowMenus, events) {
    this.dropdowMenus = document.querySelectorAll(dropdowMenus);
    this.activeClass = 'active';
    
    if(events == undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);

  }

  // ativa dropdown e adiciona função de click outside
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropDownmenusEvent() {
    this.dropdowMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });

  }

  init() {
    if(this.dropdowMenus.length) {
      this.addDropDownmenusEvent();
    }
    return this;
  }


}
