// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");
// const taskCount = document.getElementById("taskCount");
// const message = document.getElementById("message");


// addBtn.addEventListener("click", function() {

//     const taskText = taskInput.value;

//     if (taskText === "") {

//         message.textContent = "Please enter a task!";

//         return;
//     }


//     const li = document.createElement("li");

//     li.classList.add("task");


//     const span = document.createElement("span");

//     span.textContent = taskText;


//     const completeBtn = document.createElement("button");

//     completeBtn.textContent = "Complete";

//     completeBtn.classList.add("completeBtn");


//     const deleteBtn = document.createElement("button");

//     deleteBtn.textContent = "Delete";

//     deleteBtn.classList.add("deleteBtn");


//     li.appendChild(span);

//     li.appendChild(completeBtn);

//     li.appendChild(deleteBtn);


//     taskList.appendChild(li);


//     taskInput.value = "";

//     message.textContent = "";


//     taskCount.textContent =
//         "Total Tasks: " + taskList.children.length;

// });



const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const message = document.getElementById("message");


addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    // Empty input check
    if (taskText === "") {
        message.textContent = "Please enter a task!";
        return;
    }

    // New li create
    const li = document.createElement("li");
    li.classList.add("task");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("completeBtn");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");


    // Complete button ka function
    completeBtn.addEventListener("click", function () {

        span.classList.toggle("complete");

    });


    // Delete button ka function
    deleteBtn.addEventListener("click", function () {

        li.remove();

        taskCount.textContent =
            "Total Tasks: " + taskList.children.length;

    });


    // Elements ko li ke andar add karna
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // li ko task list mein add karna
    taskList.appendChild(li);

    // Input clear
    taskInput.value = "";

    // Message clear
    message.textContent = "";

    // Task count
    taskCount.textContent =
        "Total Tasks: " + taskList.children.length;

});