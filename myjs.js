function circle()
{
  var svgctrl = d3.select("body").append("svg").attr("width", 500).attr("height", 500);
  var addC = svgctrl.append("circle").attr("cx", 100).attr("cy", 250).attr("r", 50).attr("stroke", "red").attr("stroke-width", 4).attr("fill", "yellow");
}

function mytimmer() {
  
  var width = 1024;
  var height = 768;
  var ctrl = d3.select(".right").append("svg").attr("width", width).attr("height", height);
  var day = ['日', '一', '二', '三', '四', '五', '六'];
  var mydate = new Date();
  y = mydate.getFullYear();
  z = mydate.getMonth() + 1;
  d = mydate.getDate();
  w = mydate.getDay();
  h = mydate.getHours();
  m = mydate.getMinutes();
  s = mydate.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  r1 = y + "." + z + "." + d;
  r2 = "星期" + day[w];
  r3 = h + ":" + m + ":" + s;

  document.getElementById("date").innerHTML = r1;
  document.getElementById("day").innerHTML = r2;
  document.getElementById("time").innerHTML = r3;
  setTimeout("mytimmer()", 1000);
}
mytimmer();