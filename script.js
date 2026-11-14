
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // Vehicle search/filter on the inventory page.
  const search = document.querySelector('#carSearch');
  const cards = [...document.querySelectorAll('[data-car-card]')];
  if (search && cards.length) {
    search.addEventListener('input', () => {
      const term = search.value.toLowerCase().trim();
      let shown = 0;
      cards.forEach(card => {
        const match = card.dataset.search.toLowerCase().includes(term);
        card.hidden = !match;
        if (match) shown++;
      });
      const empty = document.querySelector('#noResults');
      if (empty) empty.style.display = shown ? 'none' : 'block';
    });
  }

  // Front-end validation and WhatsApp-ready booking message.
  document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = [
        'Hello LAMITAF AUTOS, I would like to make an enquiry.',
        ...[...data.entries()].map(([key, value]) => `${key}: ${value}`)
      ].join('\n');
      const notice = form.querySelector('.notice');
      if (notice) {
        notice.style.display = 'block';
        notice.textContent = 'Your details are ready. Choose WhatsApp below to send your request.';
      }
      const wa = form.querySelector('[data-whatsapp]');
      if (wa) {
        wa.href = `https://wa.me/2347086607371?text=${encodeURIComponent(message)}`;
        wa.hidden = false;
      }
    });
  });
});
