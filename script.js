const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('#language-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

languageButton?.addEventListener('click', () => {
  const isOpen = languageMenu.hidden;
  languageMenu.hidden = !isOpen;
  languageButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('[data-language]').forEach((option) => {
  option.addEventListener('click', () => {
    languageButton.firstChild.textContent = `${option.dataset.language} `;
    languageMenu.hidden = true;
    languageButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#appointment-form');
const formMessage = document.querySelector('#form-message');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll('[required]')];
  const missingField = requiredFields.find((field) => !field.value.trim());

  if (missingField) {
    const label = form.querySelector(`label[for="${missingField.id}"]`);
    formMessage.textContent = `Please enter ${label?.textContent.replace(' *', '') || 'this field'}.`;
    formMessage.className = 'form-message error';
    missingField.focus();
    return;
  }

  const data = new FormData(form);
  const doctor = data.get('doctor') || 'General consultation';
  formMessage.textContent = `Prototype: nothing was sent. Preview request for ${data.get('name')} ${data.get('surname')} — ${doctor}.`;
  formMessage.className = 'form-message success';
});
