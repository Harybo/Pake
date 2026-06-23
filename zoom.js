document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey)) {
    let currentZoom = parseFloat(document.body.style.zoom || 1);
    if (e.key === '+' || e.key === '=') {
      document.body.style.zoom = currentZoom + 0.1;
    } else if (e.key === '-') {
      document.body.style.zoom = Math.max(0.1, currentZoom - 0.1);
    } else if (e.key === '0') {
      document.body.style.zoom = 1;
    }
  }
});

// Ajout du support pour la molette de la souris
document.addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    // Empêche le défilement pendant le zoom
    e.preventDefault(); 
    
    let currentZoom = parseFloat(document.body.style.zoom || 1);
    // deltaY est négatif quand on fait défiler vers le haut (zoom avant)
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    
    document.body.style.zoom = Math.max(0.1, currentZoom + delta);
  }
}, { passive: false });
