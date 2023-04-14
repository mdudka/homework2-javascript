const input = document.getElementById("queue-input");
const ulQueue = document.getElementById("queue");
const addItemButton = document.getElementById("add-item-btn");
const deleteItemButton = document.getElementById("delete-item-btn");
const emptyMessage = document.getElementById("empty-message");

addItemButton.addEventListener("click", addItem);
deleteItemButton.addEventListener("click", deleteItem);

const queueState = JSON.parse(localStorage.getItem("queue"));

function template(item) {
  const queueItem = document.createElement("li");
  queueItem.className = "queue__item";
  queueItem.textContent = item;
  return queueItem;
}

function createQueInLocalStorage() {
  if (!queueState || queueState === "[]") {
    localStorage.setItem("queue", "[]");
  }
}

function saveToLocalStorage(item) {
  const queueState = JSON.parse(localStorage.getItem("queue"));
  queueState.push(item);
  localStorage.setItem("queue", JSON.stringify(queueState));
}

function removeFromLocalStorage() {
  const queueState = JSON.parse(localStorage.getItem("queue"));
  localStorage.setItem("queue", JSON.stringify(queueState.slice(1)));
}

function isOverflow(range) {
  return JSON.parse(localStorage.getItem("queue")).length >= range;
}

function addItem() {
  if (input.value) {
    if (!isOverflow(22)) {
      emptyMessage.classList.add("hidden");
      ulQueue.appendChild(template(input.value));
      saveToLocalStorage(input.value);
      input.value = "";
      input.focus();
    } else {
      alert("Queue overflow. The maximum number of items is 22");
    }
  }
}

function deleteItem() {
  const firstItem = document.querySelector("li");
  if (firstItem) {
    removeFromLocalStorage();
    firstItem.remove();
  }
}

function displayQueue() {
  if (queueState.length > 0) {
    emptyMessage.classList.add("hidden");
    for (const item of queueState) {
      ulQueue.appendChild(template(item));
    }
  }
}

createQueInLocalStorage();
displayQueue();
