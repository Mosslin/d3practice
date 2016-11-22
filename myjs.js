function circle()
{
  var svgctrl = d3.select("body").append("svg").attr("width", 500).attr("height", 500);
  var addC = svgctrl.append("circle").attr("cx", 100).attr("cy", 250).attr("r", 50).attr("stroke", "red").attr("stroke-width", 4).attr("fill", "yellow");
}