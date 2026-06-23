window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1);
  }
  if ((e.ctrlKey || e.metaKey) && (e.key === '-')) {
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1);
  }
  if ((e.ctrlKey || e.metaKey) && (e.key === '0')) {
    document.body.style.zoom = 1;
  }
});
