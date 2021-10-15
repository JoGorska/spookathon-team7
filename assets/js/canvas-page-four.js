const canvas = document.getElementById("page-four-canvas");
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red"
ctx.strokeStyle = 5;

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 100);
// ctx.stroke();
// ctx.endPath();

// eclipse(position, position, size, size, )

ctx.beginPath();
ctx.ellipse(100, 100, 5, 7.5, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();