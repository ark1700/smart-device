'use strict';

// picturefill
document.createElement('picture');

// Аккордеон в footer
var footerNavTitle = document.querySelector('.footer__title-nav');
var footerNav = document.querySelector('.footer__navigation');
var footerContactsTitle = document.querySelector('.footer__title-contacts');
var footerContacts = document.querySelector('.footer__contacts');

if (footerNav) {
  footerNav.classList.add('footer__navigation--m-hide');
}
if (footerContacts) {
  footerContacts.classList.add('footer__contacts--m-hide');
}

footerNavTitle.addEventListener('click', function () {
  if (footerNav.classList.contains('footer__navigation--m-hide')) {
    footerNav.classList.remove('footer__navigation--m-hide');
  } else {
    footerNav.classList.add('footer__navigation--m-hide');
  }
});

footerContactsTitle.addEventListener('click', function () {
  if (footerContacts.classList.contains('footer__contacts--m-hide')) {
    footerContacts.classList.remove('footer__contacts--m-hide');
  } else {
    footerContacts.classList.add('footer__contacts--m-hide');
  }
});

// Плавный скролл
var doScrollToBlock = function (e) {
  e.preventDefault();

  document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
};

if (document.querySelector('.promo__btn')) {
  document.querySelector('.promo__btn').addEventListener('click', doScrollToBlock);
}
if (document.querySelector('.promo__scroll')) {
  document.querySelector('.promo__scroll').addEventListener('click', doScrollToBlock);
}

// Модальное окно
var modalBtn = document.querySelector('.header__call-btn');
var modalBlock = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
var modalFirstInput = document.querySelector('.modal__text');
var htmlBody = document.querySelector('body');

if (modalBtn) {
  modalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (modalBlock) {
      modalBlock.classList.add('modal--show');
      htmlBody.classList.add('scroll-hidden');
      modalFirstInput.focus();
    }
  });
}

if (modalBlock) {
  if (modalClose) {
    modalClose.addEventListener('click', function (e) {
      if (modalBlock.classList.contains('modal--show')) {
        e.preventDefault();
        modalBlock.classList.remove('modal--show');
        htmlBody.classList.remove('scroll-hidden');
      }
    });
  }

  modalBlock.addEventListener('click', function (e) {
    if (e.target === modalBlock) {
      modalBlock.classList.remove('modal--show');
      htmlBody.classList.remove('scroll-hidden');
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (modalBlock) {
    if (modalBlock.classList.contains('modal--show') && (e.key === 'Esc' || e.code === 'Escape')) {
      modalBlock.classList.remove('modal--show');
      htmlBody.classList.remove('scroll-hidden');
    }
  }
});

// Хранение input в localStorage
var inputs = document.querySelectorAll('input[type="text"], input[type="tel"], textarea');
var inputsChangeHandler = function (e) {
  localStorage.setItem(e.currentTarget.id, e.currentTarget.value);
};

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', inputsChangeHandler);

  if (localStorage.getItem(inputs[i].id)) {
    inputs[i].value = localStorage.getItem(inputs[i].id);
  }
}

// masked input
var formTelInput = document.getElementById('form-tel');
var modalTelInput = document.getElementById('modal-tel');

// eslint-disable-next-line no-undef
var im = new Inputmask('+7(999)-999-9999');

im.mask(formTelInput);
im.mask(modalTelInput);


