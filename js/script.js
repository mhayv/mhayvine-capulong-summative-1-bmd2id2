document.querySelectorAll('.areafilter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.budgetfilter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.agefilter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

document.querySelectorAll('.interestfilter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});