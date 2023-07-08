import './index.html';
import './index.scss';

const modeToggle = document.getElementById('header-mode__switch');
const marker = document.querySelector('.header-mode__marker');
const label = document.querySelector('.header-mode__label');
const header = document.querySelector('.header');
const sidebarMenuBtn = document.querySelector('.header-menu');
const sidebarMenu = document.querySelector('.main-sidebar');
const mainBlock = document.querySelector('.main-tasks');
const menuElems = document.querySelectorAll('.main-sidebar__list-elem');

sidebarMenuBtn.addEventListener('click', openMenu);
modeToggle.addEventListener('change', toggleColorMode);
menuElems.forEach((elem) => elem.addEventListener('click', (e) => activeTile(e)));

let themeState;

function activeTile(e) {
  if (!e.target.classList.contains('selected')) {
    menuElems.forEach((elem) => elem.classList.remove('selected'));
    e.currentTarget.classList.add('selected');
  }
}

function openMenu() {
  sidebarMenuBtn.classList.toggle('open');
  sidebarMenu.classList.toggle('open');
}

function toggleColorMode() {
  header.classList.toggle('dark');
  sidebarMenu.classList.toggle('dark');
  mainBlock.classList.toggle('dark');
  label.classList.toggle('dark');
  modeToggle.classList.toggle('dark');
  marker.classList.toggle('dark');
  sidebarMenuBtn.classList.toggle('dark');

  if (header.classList.contains('dark')) {
    themeState = 'dark';
    saveTheme();
  } else {
    themeState = 'light';
    saveTheme();
  }
}

// Local Storage

function setupTheme() {
  let storageTheme = localStorage.getItem('themeState');

  if (storageTheme) {
    themeState = storageTheme;
    if (themeState === 'dark') {
      header.classList.add('dark');
      sidebarMenuBtn.classList.add('dark');
      sidebarMenu.classList.toggle('dark');
      mainBlock.classList.toggle('dark');
      label.classList.toggle('dark');
      modeToggle.classList.add('dark');
      marker.classList.add('dark');
    }
  }
}

function saveTheme() {
  localStorage.setItem('themeState', themeState);
}

setupTheme();
