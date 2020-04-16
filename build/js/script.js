'use strict';

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

if (footerNavTitle) {
  footerNavTitle.addEventListener('click', function () {
    if (footerNav.classList.contains('footer__navigation--m-hide')) {
      footerNav.classList.remove('footer__navigation--m-hide');
    } else {
      footerNav.classList.add('footer__navigation--m-hide');
    }
  });
}

if (footerContactsTitle) {
  footerContactsTitle.addEventListener('click', function () {
    if (footerContacts.classList.contains('footer__contacts--m-hide')) {
      footerContacts.classList.remove('footer__contacts--m-hide');
    } else {
      footerContacts.classList.add('footer__contacts--m-hide');
    }
  });
}


