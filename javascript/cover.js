var title = document.getElementById("title")
var text = title.innerHTML
var position = $("#title").css("vertical-align") + " " + $("#title").css("text-align")
var color = $("#title").css("color")
var offset = $("#title").css("transform")

var html = "<h2 style=\x22font-size: 3vw;"


if ((position === "text-bottom right") && (offset==="matrix(1, 0, 0, 1, 0, 1)")){
    html += "margin-top: -3.5em; margin-right: 1.5em; text-align: right;"
}
else if (position === "text-bottom right"){
    html += "margin-top: -2.5em; margin-right: 1.5em; text-align: right;"
}
else if ((position === "text-bottom left") && (offset==="matrix(1, 0, 0, 1, 0, 1)")){
    html += "margin-top: -3.5em; margin-left: 1.5em; text-align: left;"
}
else if (position === "text-bottom left"){
    html += "margin-top: -2.5em; margin-left: 1.5em; text-align: left;"
}
else if (position === "text-top right"){
    html += "position: absolute; top: 100px; right: 20px;"
}
else if (position === "text-top left"){
    html += "position: absolute; top: 100px; left: 20px;"
}
else if (position === "middle center"){
    html += "top: 17vw; position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;"
}



if (color === "rgb(255, 255, 255)"){
    html += " color: #ffffff\x22>"
}
else if (color === "rgb(0, 0, 0)"){
    html += " color: #000000\x22>"
}
else if (color === "rgb(0, 0, 255)"){
    html += " color: #164d94\x22>"
}
else{
    html += "\x22>"
}




$( document ).ready(function() {
    html += text + "</h2>";
    document.getElementById("title").outerHTML = html
});