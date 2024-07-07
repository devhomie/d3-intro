
let numbers = [3, 2, 1];

function update(data){
d3.select("svg").selectAll("circle").data(data).join("circle").attr("cx", (d, i)=> (i+1)*50).attr("cy", 50).attr("r", (d,i) => d * 5);
  
}

update(numbers)

