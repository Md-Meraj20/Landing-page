document.querySelectorAll('button').forEach(btn => {
  btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
    btn.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    btn.style.backgroundColor = '#ffd54f'; 
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = 'none';
    btn.style.backgroundColor = ''; 
  });
});
