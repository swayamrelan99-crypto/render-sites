(function(){
  "use strict";

  // Mobile menu toggle
  var burger = document.querySelector("[data-glp2-burger]");
  var mnav = document.querySelector("[data-glp2-mnav]");
  if (burger && mnav) {
    burger.addEventListener("click", function () {
      var open = mnav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mnav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mnav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Sticky header shadow on scroll
  var head = document.querySelector("[data-glp2-head]");
  var buybar = document.querySelector("[data-glp2-buybar]");
  var hero = document.querySelector("[data-glp2-hero]");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (head) head.classList.toggle("is-scrolled", y > 8);
    if (buybar && hero) {
      var heroBottom = hero.getBoundingClientRect().bottom + y;
      buybar.classList.toggle("is-on", y > heroBottom);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

})();
