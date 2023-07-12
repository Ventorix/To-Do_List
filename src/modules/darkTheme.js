const themeSwitch = document.getElementById('header-mode__switch');
const sidebarMenuBtn = document.querySelector('.header-menu');
const sidebarMenu = document.querySelector('.sidebar');
const marker = document.querySelector('.header-mode__marker');
const label = document.querySelector('.header-mode__label');
const header = document.querySelector('.header');
const mainBlock = document.querySelector('.main-tasks');

let themeState;

function toggleColorMode() {
  header.classList.toggle('dark');
  sidebarMenu.classList.toggle('dark');
  mainBlock.classList.toggle('dark');
  label.classList.toggle('dark');
  themeSwitch.classList.toggle('dark');
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
      themeSwitch.classList.add('dark');
      marker.classList.add('dark');
    }
  }
}

function saveTheme() {
  localStorage.setItem('themeState', themeState);
}

export { setupTheme, toggleColorMode };
