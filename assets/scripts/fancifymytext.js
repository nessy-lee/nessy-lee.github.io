const btn = document.querySelector('button');
const btn2 = document.getElementById("button 2");
const moo = document.getElementById("Moo");


btn.onclick = function() {
    //alert("Hello, world!");
    document.getElementById("mybox").style.fontSize = "24px";
}

btn2.onclick = function() {
    alert("Radio button");
}

moo.onclick = function() {
    document.getElementById("mybox").style.textTransform = "uppercase";
    var str = document.getElementById("mybox").value;
    var parts = str.split(" ");
    str = parts.join("-Moo "); 
    document.getElementById("mybox").value = str;

}


function changeBox() {
    if(document.getElementById("mybox").style.fontWeight == "normal"){
        document.getElementById("mybox").style.fontWeight = "bold";
        document.getElementById("mybox").style.textDecoration = "underline";
        document.getElementById("mybox").style.color = "blue";
    } else {
        document.getElementById("mybox").style.fontWeight = "normal";
        document.getElementById("mybox").style.textDecoration = "none";
        document.getElementById("mybox").style.color = "black";
    }
}