const king = document.querySelector('.chees-piece');
const squares = document.querySelectorAll('.square');
const infoDesplay = document.querySelector('#info');

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart);

squares.forEach((square) => {
  square.addEventListener('dragover', dragOver);
  square.addEventListener('dragenter', dragEnter);
  square.addEventListener('dragleave', dragLeave);
  square.addEventListener('drop', dragDrop);
  square.addEventListener('dragend', dragEnd);
});

let beingDragged;

function dragging() {
  infoDesplay.textContent = `you are Dragging a ${beingDragged.id}`;
}

function dragStart(event) {
  beingDragged = event.target;
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add('highlight');
}

function dragLeave(event) {
  event.target.classList.remove('highlight');
}

function dragDrop(event) {
  event.target.append(beingDragged);
  event.target.classList.remove('highlight');
}

function dragEnd(event) {
  event.target.classList.add('target');
  setTimeout(() => event.target.classList.remove('target'), 300);
  infoDesplay.textContent = '';
}
