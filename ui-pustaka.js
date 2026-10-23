// ui-pustaka.js — Berkas pembungkus API Bootstrap JS
function bukaDetail({ judul, isi }) {
  const el = document.querySelector('#modalDetail');
  el.querySelector('[data-judul]').textContent = judul;
  el.querySelector('[data-isi]').textContent = isi;
  bootstrap.Modal.getOrCreateInstance(el).show();
}