let startX = 0,
  startY = 0,
  newX = 0,
  newY = 0;

function mouseDown(e) {
  // On mouse click; e is the event (basically the cursor)
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  // While dragging the mouse
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  const card = e.target;
  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";
}

function mouseUp(e) {
  // When the mouse is let go
  document.removeEventListener("mousemove", mouseMove);
}

function createCard() {
  const newDiv = document.createElement("div");
  newDiv.id = "card";
  newDiv.style.position = "fixed  ";

  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
  newDiv.addEventListener("mousedown", mouseDown);
}
