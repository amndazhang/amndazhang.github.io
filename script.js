var i = 0;
var txt = 'welcome to my website, how are you'; 
var speed = 50; 

if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}