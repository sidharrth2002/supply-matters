var i = 0;
var txt = 'Sourcing. Consolidation. Shipping.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animated-subtitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//document.body.onclick = typeWriter;
typeWriter();