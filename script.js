
let numbers = [3, 2, 1, 2, 3];

d3.select("svg").selectAll("circle").data(numbers).join("circle").attr("cx", (d, i)=> (i+1)*50).attr("cy", 50).attr("r", (d,i) => d * 5);
