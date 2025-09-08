const listContainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addTask() {
  if (inputbox.value.trim() === '') {
    alert("ENTER DATA");
  } else {
    let li = document.createElement("li");
    li.textContent = inputbox.value; // safer than innerHTML
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // cross mark
    li.appendChild(span);
  }

  inputbox.value = ""; // clear input
  saveTask();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const saved = localStorage.getItem("data");
  if (saved) {
    listContainer.innerHTML = saved;
  }
}

showTask();
