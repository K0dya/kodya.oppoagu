// Modal wiring with <dialog>
document.querySelectorAll('[data-modal-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-modal-target');
    const dlg = document.getElementById(id);
    if (!dlg) return;
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open',''); // fallback
  });
});

document.querySelectorAll('dialog .close-dlg').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const dlg = e.target.closest('dialog');
    if (dlg && typeof dlg.close === 'function') dlg.close();
    else dlg.removeAttribute('open');
  });
});