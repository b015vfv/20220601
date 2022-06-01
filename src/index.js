import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(x, y) {
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
