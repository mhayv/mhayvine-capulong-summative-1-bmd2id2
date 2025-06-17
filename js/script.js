//filter button toggles

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

document.querySelectorAll('.yellow-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
      btn.textContent = 'event saved!';
    } else {
      btn.textContent = 'save event';
    }
  });
});