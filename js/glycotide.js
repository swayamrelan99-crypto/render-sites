// balmorex.com: reveal-on-scroll (progressive enhancement), "Where to?" panel, ingredient tiles, habit planner, sticky order bar.
(function () {
  var root = document.documentElement;
  var els = [].slice.call(document.querySelectorAll(".gct-rise,.gct-perday2,.gct-rater,.gct-dial2,.gct-chartx,.gct-dose,.gct-donutx"));
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function show(el) { el.classList.add("is-in"); }
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(show); }
  else {
    root.classList.add("gct-live2");
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

  var btn = document.querySelector(".gct-menubtn"), panel = document.getElementById("gct-megamenu");
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

  var tiles = [].slice.call(document.querySelectorAll(".gct-chip6"));
  if (tiles.length) {
    var stories = [].slice.call(document.querySelectorAll(".gct-focus"));
    tiles.forEach(function (t) {
      t.addEventListener("click", function () {
        var id = t.getAttribute("data-s");
        tiles.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        stories.forEach(function (s) { s.hidden = s.id !== id; });
      });
    });
  }

  var moments = [].slice.call(document.querySelectorAll(".gct-whenb")), label = document.getElementById("gct-moment");
  moments.forEach(function (m) {
    m.addEventListener("click", function () {
      moments.forEach(function (x) { x.setAttribute("aria-pressed", x === m ? "true" : "false"); });
      if (label) label.textContent = m.textContent.toLowerCase();
    });
  });
  [].slice.call(document.querySelectorAll(".gct-daysbtn")).forEach(function (d) {
    d.addEventListener("click", function () { d.setAttribute("aria-pressed", d.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
  });

  var bar = document.querySelector(".gct-sticky2"), foot = document.querySelector(".gct-base2");
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

/* hero network canvas: a drop falls into a central node and pulses travel across a hexagonal node network that settles into a steady rhythm */
(function(){var c=document.getElementById('gct-flow');if(!c||!c.getContext)return;var x=c.getContext('2d'),W=c.width,H=c.height,reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,t=0,run=true,i,k,cx=W/2,cy=H*0.62,nodes=[],edges=[],pulses=[],last=-9;
nodes.push([cx,cy]);
for(k=1;k<=2;k++){for(i=0;i<6*k;i++){var a=i/(6*k)*6.283+(k==2?0.26:0),r=k*58;nodes.push([cx+Math.cos(a)*r*1.6,cy+Math.sin(a)*r*0.95])}}
for(i=0;i<nodes.length;i++)for(k=i+1;k<nodes.length;k++){var d=Math.hypot((nodes[i][0]-nodes[k][0])/1.6,(nodes[i][1]-nodes[k][1])/0.95);if(d<70)edges.push([i,k])}
function frame(){t+=0.016;x.clearRect(0,0,W,H);
var ph=t%4;if(ph<0.05&&t-last>3){last=t;pulses.push({r:0,a:1})}
var dropY=ph<1.1?-10+ph/1.1*(cy-10):null;
for(i=0;i<pulses.length;i++){pulses[i].r+=reduce?0:2.1;pulses[i].a-=0.006}
pulses=pulses.filter(function(p){return p.a>0});
for(i=0;i<edges.length;i++){var e=edges[i],A=nodes[e[0]],B=nodes[e[1]];x.beginPath();x.moveTo(A[0],A[1]);x.lineTo(B[0],B[1]);x.strokeStyle='rgba(91,87,214,.28)';x.lineWidth=1.4;x.stroke()}
for(i=0;i<nodes.length;i++){var n=nodes[i],dist=Math.hypot((n[0]-cx)/1.6,(n[1]-cy)/0.95),glow=0;for(k=0;k<pulses.length;k++){var df=Math.abs(pulses[k].r-dist);if(df<22)glow=Math.max(glow,pulses[k].a*(1-df/22))}
x.beginPath();x.arc(n[0],n[1],(i==0?9:4.4)+4*glow,0,6.283);x.fillStyle=glow>0.05?'rgba(217,137,43,.98)':(i==0?'rgba(91,87,214,.98)':'rgba(91,87,214,.75)');x.fill()}
for(k=0;k<pulses.length;k++){x.beginPath();x.ellipse(cx,cy,pulses[k].r*1.6,pulses[k].r*0.95,0,0,6.283);x.strokeStyle='rgba(217,137,43,'+(pulses[k].a*0.5)+')';x.lineWidth=2;x.stroke()}
if(dropY!==null&&!reduce){x.beginPath();x.moveTo(cx,dropY-9);x.quadraticCurveTo(cx+6,dropY+3,cx,dropY+6);x.quadraticCurveTo(cx-6,dropY+3,cx,dropY-9);x.fillStyle='rgba(217,137,43,.98)';x.fill()}
if(reduce&&pulses.length==0){pulses.push({r:50,a:0.7},{r:110,a:0.4})}
if(run&&!reduce)requestAnimationFrame(frame)}
frame();
if('IntersectionObserver' in window){new IntersectionObserver(function(e){var v=e[0].isIntersecting;if(v&&!run&&!reduce){run=true;frame()}else if(!v){run=false}},{threshold:0}).observe(c)}
})();
