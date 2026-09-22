document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = e.target.elements["new-task-description"].value;

    buildToDo(task);
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.querySelector("#tasks");
    taskList.append(li);
  };
});
