
let numbers = [3, 2, 1];

d3.selectAll("circle").data(numbers).attr("r",(d, i)=> d * 5);
