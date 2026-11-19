
/* 踏勘照片：轻量生成，避免在页面里重复 20 段标记 */
(function(){
  var items = [
    ["aqz-01.jpg","俯瞰场地片区","site"],["aqz-02.jpg","南侧俯瞰场地","site"],
    ["aqz-03.jpg","惠义巷街景","site"],["aqz-04.jpg","场地北侧（后门）","site"],
    ["aqz-05.jpg","场地正大门（南门）","site"],["aqz-06.jpg","场地主楼正面","site"],
    ["aqz-07.jpg","主楼东侧外立面","site"],["aqz-08.jpg","主入口挑高前厅","inside"],
    ["aqz-09.jpg","大厅中段主体空间","inside"],["aqz-10.jpg","大厅北段（看向东侧）","inside"],
    ["aqz-11.jpg","大厅主体空间","inside"],["aqz-12.jpg","大厅主体空间全景","inside"],
    ["aqz-13.jpg","主入口挑高前厅二层","inside"],["aqz-14.jpg","前院与主楼","site"],
    ["aqz-15.jpg","院内大树","site"],["aqz-16.jpg","改造中的大厅","inside"],
    ["aqz-17.jpg","屋架与木地板","inside"],["aqz-18.jpg","屋面俯瞰","site"],
    ["aqz-19.jpg","屋顶远眺","site"],["aqz-20.jpg","场地航拍","site"]
  ];
  var grid = document.getElementById("archGrid");
  var html = "";
  items.forEach(function(it, i){
    html += '<figure data-kind="' + it[2] + '" data-lb data-group="a" data-cap="' + it[1] + '" style="margin:0">'
          + '<div style="overflow:hidden;aspect-ratio:4/3;background:var(--paper-2)">'
          + '<img src="assets/img/archive/' + it[0] + '" width="1400" height="1050" alt="' + it[1] + '" loading="lazy" style="width:100%;height:100%;object-fit:cover">'
          + '</div>'
          + '<figcaption style="border:0;padding-top:6px;margin-top:0;display:flex;justify-content:space-between;font-size:10.5px">'
          + '<span>' + it[1] + '</span><span style="color:var(--dim)">' + (it[2] === "site" ? "外" : "内") + '</span></figcaption></figure>';
  });
  grid.innerHTML = html;

  var chips = document.querySelectorAll(".chip");
  chips.forEach(function(c){
    c.addEventListener("click", function(){
      chips.forEach(function(x){ x.style.background = "transparent"; x.style.color = "var(--dim)"; });
      c.style.background = "var(--ink)"; c.style.color = "var(--paper)";
      var f = c.dataset.filter;
      document.querySelectorAll("#archGrid figure").forEach(function(fig){
        fig.style.display = (f === "all" || fig.dataset.kind === f) ? "" : "none";
      });
    });
  });
})();
