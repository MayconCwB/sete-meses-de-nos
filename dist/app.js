const $ = (id) => document.getElementById(id);
const content = window.loveContent;
let read = new Set();
try { const saved = JSON.parse(localStorage.getItem('moh-read') || '[]'); if (Array.isArray(saved)) read = new Set(saved.filter(n => Number.isInteger(n) && n >= 0 && n < 7)); } catch {}
let currentLetter = 0;
function openPresent() {
  $('main').hidden = false;
  $('intro').classList.add('opened');
  setTimeout(() => { $('intro').hidden = true; $('main').querySelector('a').focus({ preventScroll: true }); }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650);
}
$('open-envelope').addEventListener('click', openPresent);
$('open-text').addEventListener('click', openPresent);
$('replay').addEventListener('click', () => { $('main').hidden = true; $('intro').hidden = false; $('intro').classList.remove('opened'); window.scrollTo(0, 0); $('open-envelope').focus(); });
function updateRead() {
  document.querySelectorAll('.letter-card').forEach((card, i) => { card.classList.toggle('read', read.has(i)); card.querySelector('.letter-status').textContent = read.has(i) ? 'Lida com carinho ♡' : 'Abrir cartinha'; });
  $('read-progress').textContent = `${read.size} de 7 cartinhas abertas com carinho`;
  try { localStorage.setItem('moh-read', JSON.stringify([...read])); } catch {}
}
content.letters.forEach((letter, i) => {
  const card = document.createElement('button'); card.className = 'letter-card';
  const number = document.createElement('span'); number.className = 'letter-number'; number.textContent = `0${i + 1}`;
  const icon = document.createElement('span'); icon.className = 'mini-envelope'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = '♡';
  const title = document.createElement('h3'); title.textContent = letter.title;
  const subtitle = document.createElement('p'); subtitle.textContent = letter.subtitle;
  const status = document.createElement('span'); status.className = 'letter-status';
  card.append(number, icon, title, subtitle, status); card.addEventListener('click', () => showLetter(i)); $('letter-grid').append(card);
});
function showLetter(index) {
  currentLetter = index; const letter = content.letters[index];
  $('dialog-number').textContent = `CARTINHA ${index + 1} DE 7 · PARA MOH`;
  $('dialog-title').textContent = letter.title; $('dialog-body').replaceChildren();
  letter.body.forEach(text => { const p = document.createElement('p'); p.textContent = text; $('dialog-body').append(p); });
  $('next-letter').textContent = index === 6 ? 'Guardar no coração' : 'Próxima cartinha';
  read.add(index); updateRead(); if (!$('letter-dialog').open) $('letter-dialog').showModal();
}
$('letter-dialog').querySelector('.close-dialog').addEventListener('click', () => $('letter-dialog').close());
$('letter-dialog').addEventListener('click', e => { if (e.target === $('letter-dialog')) { const r = e.target.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close(); } });
$('next-letter').addEventListener('click', () => { if (currentLetter === 6) $('letter-dialog').close(); else showLetter(currentLetter + 1); });
content.photos.forEach(photo => {
  const figure = document.createElement('figure'); figure.className = 'polaroid';
  const placeholder = document.createElement('div'); placeholder.className = 'photo-placeholder';
  const motif = document.createElement('span'); motif.textContent = photo.motif;
  const note = document.createElement('p'); note.textContent = photo.note; placeholder.append(motif, note);
  if (photo.src) { const img = document.createElement('img'); img.src = photo.src; img.alt = photo.caption; img.loading = 'lazy'; img.addEventListener('error', () => img.replaceWith(placeholder)); figure.append(img); } else figure.append(placeholder);
  const caption = document.createElement('figcaption'); caption.textContent = photo.caption; figure.append(caption); $('photo-grid').append(figure);
});
// Calendar days in São Paulo, independent of the visitor's time zone.
function updateDays() { const now = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()); const part = type => now.find(p=>p.type===type).value; $('days').textContent = Math.max(0, Math.floor((Date.UTC(+part('year'), +part('month')-1, +part('day')) - Date.UTC(2026,2,13))/86400000)); }
updateDays(); setInterval(updateDays, 60000); updateRead();
$('surprise-button').addEventListener('click', () => { $('surprise').hidden = false; $('surprise-button').hidden = true; $('surprise').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block:'center'}); });
