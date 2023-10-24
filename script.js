let cursor = document.querySelector("#ball")
let body = document.body;

body.addEventListener("mousemove",function(location){
  cursor.style.left=location.clientX+"px"
  cursor.style.top=location.clientY+"px"
})