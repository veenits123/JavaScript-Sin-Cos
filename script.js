var canvas = document.querySelector("canvas");
var context = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var no =new Array(850,800,550,400,545,565,595,660,665,670,680,350,250,210,220,270,275,280,285,335,350,355,360,370,385,410,420,430,440,445,450,470,510);
var t=0;
var a=0;
var color=360*Math.random();
function animate() {
a+=0.01;
context.beginPath();
var x=canvas.width/2+canvas.width/2*Math.cos(no[t]*a)*Math.sin(a);
var y=canvas.height/2+canvas.width/2*Math.sin(no[t]*a)*Math.sin(a);
context.strokeStyle ="hsl("+color++ +",100%,50%)";
context.moveTo(canvas.width/2,canvas.height/2);
context.lineTo(x,y);
context.stroke();
if(a > 6.5){ 
a=0.01; 
t=t+1;
context.clearRect(0,0,canvas.width,canvas.height); 
}
if(t>33){
    t=0;
}
requestAnimationFrame(animate)|| webkitRequestAnimationFrame(animate)|| mozRequestAnimationFrame(animate) || oRequestAnimationFrame (animate)|| msRequestAnimationFrame(animate);
}
requestAnimationFrame(animate)|| webkitRequestAnimationFrame(animate)|| mozRequestAnimationFrame(animate) || oRequestAnimationFrame (animate)|| msRequestAnimationFrame(animate);