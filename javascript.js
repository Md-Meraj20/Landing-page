document.querySelectorAll('button').forEach(btn => {
  if (btn.textContent.trim().toLowerCase() === "sign up now") {
    btn.addEventListener('click', () => {
      document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
