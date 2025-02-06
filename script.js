const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const profileCard = document.getElementById('profileCard');

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  profileCard.classList.toggle('dark-theme');
});
   // Update time every second
   setInterval(() => {
    const now = new Date();
    document.getElementById('time').textContent = `${now.toTimeString().split(' ')[0]}`;
}, 1000);

document.getElementById('toggle-button').addEventListener('click', function() {
  const bioText = document.getElementById('bio-text');
  const button = document.getElementById('toggle-button');

  if (bioText.style.display === 'none') {
      bioText.style.display = 'block';
      button.innerHTML = 'hide Bio';
  } else {
      bioText.style.display = 'none';
      button.textContent = 'About me'
  }
});