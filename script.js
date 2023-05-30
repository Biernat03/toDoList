var titleinput = document.getElementById("title");
var descriptioninput = document.getElementById("description");
const editinputs = document.querySelectorAll(".editinput");
const adduserbutton = document.getElementById("adduserbtn");

const tasks = document.querySelectorAll('.task');
const stateboxes = document.querySelectorAll('.statebox');

tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });
});

stateboxes.forEach(statebox => {
    statebox.addEventListener("dragover", e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(statebox, e.clientY)
        const task = document.querySelector('.dragging')
        if (afterElement == null) {
            statebox.appendChild(task)
        }
        else {
            statebox.insertBefore(task, afterElement)
        }
    })
})

function getDragAfterElement(statebox, y) {
    const draggableElements = [...statebox.querySelectorAll('.task:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        }
        else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

//adduser button
adduserbutton.addEventListener("click", () => 
{
    const addusercontainter = document.getElementById("adduser");
    addusercontainter.style.display = "flex";
    const exitbutton = document.getElementById("close");
    exitbutton.addEventListener("click", () =>
    {
        addusercontainter.style.display = "none";
    });
});

titleinput.value = "Title";
descriptioninput.value = "Description";

//on hover input edit icon
editinputs.forEach((editinput) => 
{
    editinput.addEventListener("mouseover", () => 
    {
        const editicons = editinput.querySelectorAll("span");
        editicons.forEach(editicon => {
            editicon.style.visibility = "visible"; 
        });
    });
    editinput.addEventListener("mouseleave", () =>
    {
        const editicons = editinput.querySelectorAll("span");
        editicons.forEach(editicon => {
            editicon.style.visibility = "hidden"; 
        });
    });
});