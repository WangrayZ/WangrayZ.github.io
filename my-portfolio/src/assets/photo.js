
/* 自适应整齐网格：按原始比例排成等高行，不裁切、统一留白 */
(function () {
  var grid = document.getElementById("photoGrid");
  if (!grid) return;
  var figures = Array.prototype.slice.call(grid.querySelectorAll("figure"));
  var data = figures.map(function (f) {
    var img = f.querySelector("img");
    var w = parseFloat(img.getAttribute("width")) || 3;
    var h = parseFloat(img.getAttribute("height")) || 2;
    return { fig: f, ratio: w / h };
  });
  var CAP = 26;

  function build() {
    var W = grid.clientWidth;
    if (!W) return;
    var gap = W < 640 ? 8 : (W < 1100 ? 12 : 16);
    var perRow = W < 640 ? 2 : (W < 1100 ? 3 : 4);
    var target = Math.max(150, Math.min(360, W / (perRow * 1.05)));
    grid.innerHTML = "";
    grid.style.setProperty("--g", gap + "px");

    var row = [], sum = 0;
    function flush(last) {
      if (!row.length) return;
      var n = row.length;
      var avail = W - gap * (n - 1);
      var hRow = (avail - 0.6) / sum;
      if (last && hRow > target) hRow = target;
      hRow = Math.max(120, Math.min(hRow, 560));
      var rowEl = document.createElement("div");
      rowEl.className = "jrow";
      row.forEach(function (item) {
        var w = Math.min(W, Math.max(60, item.ratio * hRow));
        item.fig.style.width = w + "px";
        var img = item.fig.querySelector("img");
        img.style.height = hRow + "px";
        rowEl.appendChild(item.fig);
      });
      grid.appendChild(rowEl);
      row = [];
      sum = 0;
    }

    data.forEach(function (item) {
      row.push(item);
      sum += item.ratio;
      var hEst = (W - gap * (row.length - 1)) / sum;
      if (hEst <= target) flush(false);
    });
    flush(true);
  }

  var t = 0;
  window.addEventListener("resize", function () {
    clearTimeout(t);
    t = setTimeout(build, 160);
  });
  build();
  window.addEventListener("load", build);
})();
