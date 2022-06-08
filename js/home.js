var h1 = ["Kids", " World"];
var colors = ["orange", "green"];
var text = "";
    for (var i = 0; i < h1.length; i++) {
    text += "<font color='" + colors[i] + "'>" + h1[i] + "</font>";
    }
document.getElementById("demo").innerHTML = text;