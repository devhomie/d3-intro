d3.selectAll("circle")
  .attr("fill", "hotpink")
  .attr("r", (d, i) => 10 + i * 5);

d3.select("body").insert("h1", "svg").text("Hello, D3!")