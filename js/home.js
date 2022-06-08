// let moon = document.getElementById('moon');
//     let moon_mountain = document.getElementById('moon_mountain');
//     let headline = document.getElementById('headline');
//     let btn = document.getElementById('btn');
//     let alienstarship = document.getElementById('alienstarship');

var h1 = ["Kids", " World"];
var colors = ["orange", "green"];
var text = "";
    for (var i = 0; i < h1.length; i++) {
    text += "<font color='" + colors[i] + "'>" + h1[i] + "</font>";
    }
document.getElementById("demo").innerHTML = text;