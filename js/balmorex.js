// balmorex.com: reveal-on-scroll (progressive enhancement), "Where to?" panel, ingredient tiles, habit planner, sticky order bar.
(function () {
  var root = document.documentElement;
  var els = [].slice.call(document.querySelectorAll(".bpx-rise,.bpx-perday2,.bpx-rater,.bpx-dial2,.bpx-chartx,.bpx-dose,.bpx-donutx"));
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(el) { el.classList.add("is-in"); }
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(show); }
  else {
    root.classList.add("bpx-live2");
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: "200px 0px -5% 0px", threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
    var sweep = function () {
      var vh = innerHeight;
      els.forEach(function (el) { if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < vh * 0.92) show(el); });
    };
    addEventListener("scroll", sweep, { passive: true });
    addEventListener("load", function () { sweep(); [400, 1200, 2500].forEach(function (t) { setTimeout(sweep, t); }); });
    sweep();
    setTimeout(function () { els.forEach(show); }, 3500);
  }

  var btn = document.querySelector(".bpx-menubtn"), panel = document.getElementById("bpx-megamenu");
  if (btn && panel) {
    var set = function (on) {
      if (on) panel.setAttribute("data-open", ""); else panel.removeAttribute("data-open");
      btn.setAttribute("aria-expanded", on ? "true" : "false");
    };
    btn.addEventListener("click", function (e) { e.stopPropagation(); set(!panel.hasAttribute("data-open")); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); e.stopPropagation(); });
    document.addEventListener("click", function () { set(false); });
    addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
  }

  var tiles = [].slice.call(document.querySelectorAll(".bpx-chip6"));
  if (tiles.length) {
    var stories = [].slice.call(document.querySelectorAll(".bpx-focus"));
    tiles.forEach(function (t) {
      t.addEventListener("click", function () {
        var id = t.getAttribute("data-s");
        tiles.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        stories.forEach(function (s) { s.hidden = s.id !== id; });
      });
    });
  }

  var moments = [].slice.call(document.querySelectorAll(".bpx-whenb")), label = document.getElementById("bpx-moment");
  moments.forEach(function (m) {
    m.addEventListener("click", function () {
      moments.forEach(function (x) { x.setAttribute("aria-pressed", x === m ? "true" : "false"); });
      if (label) label.textContent = m.textContent.toLowerCase();
    });
  });
  [].slice.call(document.querySelectorAll(".bpx-daysbtn")).forEach(function (d) {
    d.addEventListener("click", function () { d.setAttribute("aria-pressed", d.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
  });

  var bar = document.querySelector(".bpx-sticky2"), foot = document.querySelector(".bpx-base2");
  if (bar) {
    var upd = function () {
      if (scrollY > 620) bar.setAttribute("data-up", ""); else bar.removeAttribute("data-up");
      var hide = false;
      if (foot) hide = foot.getBoundingClientRect().top < innerHeight - 40;
      if (hide) bar.setAttribute("data-hide", ""); else bar.removeAttribute("data-hide");
    };
    addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
  }
})();

/* hero muscle canvas: tight wavy fibres relaxing into smooth lines while a cool ripple spreads across them */
(function(){var c=document.getElementById('bpx-flow');if(!c||!c.getContext)return;var x=c.getContext('2d'),W=c.width,H=c.height,reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,t=0,run=true,i,k,n=7;
function frame(){t+=0.016;x.clearRect(0,0,W,H);
var cyc=reduce?0.7:(Math.sin(t*0.7)+1)/2,rip=reduce?W*0.5:((t*90)%(W+160))-80;
for(k=0;k<n;k++){var y0=30+k*(H-60)/(n-1),tense=(1-cyc),amp=2+tense*11;
x.beginPath();for(i=0;i<=W;i+=4){var near=Math.max(0,1-Math.abs(i-rip)/110),a2=amp*(1-0.8*near),yy=y0+Math.sin(i*0.09+k*1.3)*a2+Math.sin(i*0.23+t*3+k)*tense*3*(1-near);if(i)x.lineTo(i,yy);else x.moveTo(i,yy)}
x.strokeStyle=k%2?'rgba(123,75,179,.85)':'rgba(229,138,31,.85)';x.lineWidth=3.4;x.lineCap='round';x.stroke()}
var g=x.createLinearGradient(rip-90,0,rip+90,0);g.addColorStop(0,'rgba(123,75,179,0)');g.addColorStop(.5,'rgba(110,190,230,.28)');g.addColorStop(1,'rgba(123,75,179,0)');x.fillStyle=g;x.fillRect(rip-90,0,180,H);
for(k=0;k<n;k++){var y1=30+k*(H-60)/(n-1);for(i=30;i<W;i+=95){var d=Math.abs(i-rip),gl=Math.max(0,1-d/110);x.beginPath();x.arc(i,y1+Math.sin(i*0.09+k*1.3)*(2+(1-cyc)*11)*(1-0.8*gl),3+2.4*gl,0,6.283);x.fillStyle=gl>0.1?'rgba(110,190,230,.98)':'rgba(37,26,56,.55)';x.fill()}}
if(run&&!reduce)requestAnimationFrame(frame)}
frame();
if('IntersectionObserver' in window){new IntersectionObserver(function(e){var v=e[0].isIntersecting;if(v&&!run&&!reduce){run=true;frame()}else if(!v){run=false}},{threshold:0}).observe(c)}
})();
