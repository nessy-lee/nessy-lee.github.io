/*alert
function alerting() {
   alert("You're fancy!"); 
} */

//makes font bigger
function bigging() {
    var text = document.getElementById("grow");
    text.style.fontSize = "24pt";
 }
 
 //makes font bolded
 function bolding() {
    var text = document.getElementById("grow");
    text.style.fontWeight = "bold";
    text.style.color= "blue";
    text.style.textDecoration= "underline";
 }
 
 //makes the font unbolded
 function unbolding() {
    var text = document.getElementById("grow");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration= "none";
 }
 
 //makes the font uppercase and adds Moo suffix
 function mooing() {
    var suffix = '-Moo',
    txt = document.getElementById("grow");
    txt.style.textTransform="uppercase";
    txt.value = txt.value.split('.').join('') + suffix;
 }