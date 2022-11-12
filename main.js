canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var raio = "6";
var width = "4";
var altura = "10";

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = width;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = width;
ctx.arc(290, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = width;
ctx.arc(335, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = width;
ctx.arc(375, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = width;
ctx.arc(420, 210, 40, 0, 2 * Math.PI);
ctx.stroke();