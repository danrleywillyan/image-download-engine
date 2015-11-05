alert();

var input = ["https://www.google.com.br"];

$(document).ready(function(input) {
  var array = input;
  for (var i = 0; i < array.length; i++) {
    console.log("array = ");
    console.log(array[i]);

    download(array[i], i);

    console.log("download acima");
  }
});

function download(arrayItem, index){
  console.log("entrou na download");
  var a = $("<a>")
    .attr("img", arrayItem)
    .attr("download", "img"+index+".png")
    .appendTo("body");

a[0].click();

a.remove();

console.log("saiu da download");
}
