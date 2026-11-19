(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- 顶部状态与阅读进度 ---------- */
  var nav = document.getElementById("nav");
  var bar = document.getElementById("bar");
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("solid", y > 24);
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + "%";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- 滚动入场 ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -4% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- 首页粒子 ---------- */
  var canvas = document.getElementById("dots");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, dots = [], rings = [], mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function build() {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(36, Math.min(90, Math.round(W / 16)));
      dots = [];
      for (var i = 0; i < n; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.5 + Math.random() * 1.7,
          a: 0.14 + Math.random() * 0.3,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12
        });
      }
      rings = [
        { x: W * 0.78, y: H * 0.32, r: Math.min(W, H) * 0.16, a: 0.06 },
        { x: W * 0.2, y: H * 0.74, r: Math.min(W, H) * 0.1, a: 0.05 }
      ];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(239,234,225,1)";
      ctx.strokeStyle = "rgba(239,234,225,1)";
      for (var k = 0; k < rings.length; k++) {
        ctx.globalAlpha = rings[k].a;
        ctx.beginPath();
        ctx.arc(rings[k].x, rings[k].y, rings[k].r, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        ctx.globalAlpha = d.a;
        ctx.beginPath();
        ctx.arc(d.x + mouse.x * 0.012, d.y + mouse.y * 0.012, d.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduce) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < -10) d.x = W + 10;
          if (d.x > W + 10) d.x = -10;
          if (d.y < -10) d.y = H + 10;
          if (d.y > H + 10) d.y = -10;
        }
      }
      ctx.globalAlpha = 1;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      if (!reduce) requestAnimationFrame(draw);
    }

    window.addEventListener("resize", function () { build(); if (reduce) draw(); });
    window.addEventListener("mousemove", function (e) {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    build();
    draw();
  }

  /* ---------- 首页右侧：粒子光晕 ---------- */
  var spark = document.getElementById("spark");
  if (spark && spark.getContext) {
    var sctx = spark.getContext("2d");
    var sW = 0, sH = 0, pts = [], t = 0;
    var sReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function buildSpark() {
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      sW = spark.clientWidth;
      sH = spark.clientHeight;
      spark.width = Math.round(sW * ratio);
      spark.height = Math.round(sH * ratio);
      sctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      var n = Math.max(60, Math.min(160, Math.round(sW / 6)));
      var R = Math.min(sW, sH) * 0.46;
      pts = [];
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2;
        var r = Math.pow(Math.random(), 0.7) * R;
        pts.push({
          a: a, r: r, R: R,
          s: 0.35 + Math.random() * 1.5,
          o: 0.22 + Math.random() * 0.65,
          va: (Math.random() - 0.5) * 0.00055,
          vr: (Math.random() - 0.5) * 0.12,
          ph: Math.random() * Math.PI * 2
        });
      }
    }

    function drawSpark() {
      sctx.clearRect(0, 0, sW, sH);
      sctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        if (!sReduce) {
          p.a += p.va;
          p.r += p.vr;
          if (p.r < p.R * 0.12 || p.r > p.R) p.vr *= -1;
        }
        var x = sW / 2 + Math.cos(p.a) * p.r;
        var y = sH / 2 + Math.sin(p.a) * p.r * 0.92;
        var tw = sReduce ? 1 : (0.55 + 0.45 * Math.sin(p.ph + t * 0.0008));
        sctx.globalAlpha = p.o * tw;
        sctx.fillStyle = "rgba(247,122,79,1)";
        sctx.shadowColor = "rgba(242,106,67,.85)";
        sctx.shadowBlur = p.s > 1.05 ? 14 : 6;
        sctx.beginPath();
        sctx.arc(x, y, p.s, 0, Math.PI * 2);
        sctx.fill();
      }
      sctx.globalAlpha = 1;
      sctx.shadowBlur = 0;
      sctx.globalCompositeOperation = "source-over";
      if (!sReduce) { t += 16; requestAnimationFrame(drawSpark); }
    }

    window.addEventListener("resize", function () { buildSpark(); if (sReduce) drawSpark(); });
    buildSpark();
    drawSpark();
  }

  /* ---------- 灯箱 ---------- */
  var lb = document.getElementById("lb");
  if (!lb) return;

  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var lbCount = document.getElementById("lbCount");
  var group = [], index = 0, lastFocus = null;

  function render() {
    var item = group[index];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.cap;
    lbCap.textContent = item.cap;
    lbCount.textContent = group.length > 1 ? (index + 1) + " / " + group.length : "";
  }

  function open(fig) {
    var name = fig.dataset.group || "all";
    group = Array.prototype.slice.call(document.querySelectorAll('figure[data-lb][data-group="' + name + '"]')).map(function (f) {
      return { src: f.querySelector("img").getAttribute("src"), cap: f.dataset.cap || "" };
    });
    var src = fig.querySelector("img").getAttribute("src");
    index = group.findIndex(function (it) { return it.src === src; });
    if (index < 0) index = 0;
    lastFocus = document.activeElement;
    render();
    lb.classList.add("open");
    document.body.classList.add("lb-open");
    document.getElementById("lbClose").focus();
  }

  function close() {
    lb.classList.remove("open");
    document.body.classList.remove("lb-open");
    if (lastFocus) lastFocus.focus();
  }

  function step(n) {
    if (!group.length) return;
    index = (index + n + group.length) % group.length;
    render();
  }

  document.querySelectorAll("figure[data-lb]").forEach(function (f) {
    f.setAttribute("tabindex", "0");
    f.setAttribute("role", "button");
    f.addEventListener("click", function () { open(f); });
    f.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(f); }
    });
  });

  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
  document.getElementById("lbNext").addEventListener("click", function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
})();
