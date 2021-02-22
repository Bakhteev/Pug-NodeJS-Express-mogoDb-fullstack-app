const headerLinks = document.querySelectorAll('.header__link')
headerLinks.forEach(link =>{
  link.classList.remove('active')
  if (window.location.href.endsWith(link.getAttribute('href', ))) {
    link.classList.add('active')
  }
})
