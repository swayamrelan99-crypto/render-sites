(function(){
'use strict';
var sticky = document.querySelector('.glp-sticky');
if(sticky){
  var hero = document.querySelector('.glp-hero');
  var onScroll = function(){
    var trigger = hero ? hero.offsetHeight : 400;
    sticky.classList.toggle('is-on', window.scrollY > trigger);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}
var chk = document.getElementById('glp-menu');
if(chk){
  document.querySelectorAll('.glp-sheet a').forEach(function(a){
    a.addEventListener('click', function(){ chk.checked = false; });
  });
}
var faqSearch = document.querySelector('[data-faqsearch] input');
if(faqSearch){
  var items = document.querySelectorAll('.glp-qa');
  faqSearch.addEventListener('input', function(){
    var q = faqSearch.value.trim().toLowerCase();
    items.forEach(function(item){
      item.style.display = (!q || item.textContent.toLowerCase().indexOf(q) !== -1) ? '' : 'none';
    });
  });
}
})();
