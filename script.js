function addTask() {
  const mainInput = document.getElementById("taskInput");
  const taskText = mainInput.value.trim();

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <input type="text" value="${taskText}" disabled>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="save" style="display:none">Save</button>
      <button class="delete">Delete</button>
    </div>
  `;

  const editBtn = li.querySelector(".edit");
  const saveBtn = li.querySelector(".save");
  const deleteBtn = li.querySelector(".delete");
  const taskInput = li.querySelector("input");

  editBtn.onclick = () => {
    taskInput.disabled = false;
    taskInput.focus();
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
  };

  saveBtn.onclick = () => {
    taskInput.disabled = true;
    saveBtn.style.display = "none";
    editBtn.style.display = "inline-block";
  };

  deleteBtn.onclick = () => {
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);
  mainInput.value = "";
}

















































/*function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <span onclick="removeTask(this)">✖</span>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}*/
