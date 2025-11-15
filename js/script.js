$(window).on("load", function () {
  $(".loader").fadeOut(1000);
  new WOW().init();
});
new WOW().init();

///////////
     ///////// $$ add_active_to_header $$ //////////
     window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 300) {
          document.querySelector('header').classList.add('active')

      } else {
          document.querySelector('header').classList.remove('active')

      }
  })
  ///////// $$ active-link $$ //////////
  let allLinks = document.querySelectorAll(".navbar a");
  allLinks.forEach((link) => {
      if (link.href == location.href) {
          link.parentElement.classList.add('active')
      } else if (link.href !== location.href) {
          link.parentElement.classList.remove('active');
      }
  })
  ///////// $$ burger-icon $$ //////////
  let mainMenu = document.querySelector('.burger-icon');
  let nav = document.querySelector('.navbar');
  mainMenu.onclick = function (e) {
      nav.classList.toggle('active');
      mainMenu.classList.toggle("active")
      e.stopPropagation()
  }
  document.body.onclick = function () {
      if (nav.classList.contains('active')) {
          nav.classList.remove('active')
          mainMenu.classList.remove("active")
          document.body.style.cursor = 'pointer'
      }
  }
  nav.onclick = function (e) {
      e.stopPropagation();
  }