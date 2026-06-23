// Création de l'élément de notification
const zoomIndicator = document.createElement('div');
zoomIndicator.style.position = 'fixed';
zoomIndicator.style.top = '10px';
zoomIndicator.style.right = '10px';
zoomIndicator.style.padding = '5px 10px';
zoomIndicator.style.background = 'rgba(0, 0, 0, 0.7)';
zoomIndicator.style.color = '#fff';
zoomIndicator.style.borderRadius = '5px';
zoomIndicator.style.zIndex = '9999';
zoomIndicator.style.display = 'none';
zoomIndicator.style.fontFamily = 'sans-serif';
document.body.appendChild(zoomIndicator);

let timeout;

function showZoom(val) {
    const percent = Math.round(val * 100);
    zoomIndicator.innerText = `Zoom : ${percent}%`;
    zoomIndicator.style.display = 'block';
    
    // Cache le message après 1.5 secondes
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        zoomIndicator.style.display = 'none';
    }, 1500);
}

function applyZoom(newZoom) {
    // Sécurité pour éviter des zooms extrêmes
    const safeZoom = Math.max(0.3, Math.min(3.0, newZoom));
    document.body.style.zoom = safeZoom;
    showZoom(safeZoom);
}

// Support Clavier
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey)) {
    let currentZoom = parseFloat(document.body.style.zoom || 1);
    if (e.key === '+' || e.key === '=') applyZoom(currentZoom + 0.1);
    else if (e.key === '-') applyZoom(currentZoom - 0.1);
    else if (e.key === '0') applyZoom(1);
  }
});

// Support Molette
document.addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    let currentZoom = parseFloat(document.body.style.zoom || 1);
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    applyZoom(currentZoom + delta);
  }
}, { passive: false });
