import './index.html';
import './index.scss';

const modeToggle = document.getElementById('header-mode__switch');
const marker = document.querySelector('.header-mode__marker');
const label = document.querySelector('.header-mode__label');
const header = document.querySelector('.header');
const sidebarMenu = document.querySelector('.header-menu');

sidebarMenu.addEventListener('click', openMenu);
modeToggle.addEventListener('change', toggleColorMode);
window.addEventListener('load', setupTheme);

let themeState;

function openMenu() {
  sidebarMenu.classList.toggle('open');
}

function toggleColorMode() {
  header.classList.toggle('dark-header');
  document.body.classList.toggle('dark');
  label.classList.toggle('dark');
  modeToggle.classList.toggle('dark-active');
  marker.classList.toggle('dark-active');
  sidebarMenu.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
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
      header.classList.add('dark-header');
      document.body.classList.add('dark');
      sidebarMenu.classList.add('dark');
      label.classList.toggle('dark');
      modeToggle.classList.add('dark-active');
      marker.classList.add('dark-active');
    }
  }
}

function saveTheme() {
  localStorage.setItem('themeState', themeState);
}
