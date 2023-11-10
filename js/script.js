function toggleDarkMode() {
  const body = document.body;
  const logo = document.querySelector('.logo');
  const themeButton = document.getElementById('themeButton');
  
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    themeButton.innerText = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    themeButton.innerText = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

function reloadPage() {
  window.location.reload();
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  document.getElementById('themeButton').innerText = '☀️';
  document.querySelector('.logo').style.color = 'white';
}

document.getElementById('themeButton').addEventListener('click', toggleDarkMode);
document.getElementById('reloadLink').addEventListener('click', reloadPage);

function goToRead(mangaName) {
  window.location.href = '/read.html?manga=' + mangaName;
}

