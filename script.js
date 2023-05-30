var titleinput = document.getElementById("title")
var descriptioninput = document.getElementById("description")
const editinputs = document.querySelectorAll(".editinput")
const adduserbutton = document.getElementById("adduserbtn")

//statebox create
async function stateboxcreate()
{
    const statebox = document.createElement("div")
    statebox.classList.add("statebox")
        const stateboxbuttonsbox = document.createElement("div")
        stateboxbuttonsbox.classList.add("stateboxbuttonsbox")
            const stateboxbuttonadd = document.createElement("button")
            const stateboxbuttonsettings = document.createElement("button")
            const stateboxbuttondelete = document.createElement("button")
            //adding button class
            stateboxbuttonadd.classList.add("stateboxbutton")
            stateboxbuttonsettings.classList.add("stateboxbutton")
            stateboxbuttondelete.classList.add("stateboxbutton")
                //creating span
                const spanadd = document.createElement("span")
                const spansettings = document.createElement("span")
                const spandelete = document.createElement("span")
                //adding span class
                spanadd.classList.add("material-symbols-outlined")
                spansettings.classList.add("material-symbols-outlined")
                spandelete.classList.add("material-symbols-outlined")
                //adding span atribute
                spanadd.innerHTML = "add"
                spansettings.innerHTML = "settings"
                spandelete.innerHTML = "delete"
                    //creating statename title
                    const statename = document.createElement("p")
                    statename.classList.add("statename");
                    statename.innerHTML = "State";
    //rendering all
    document.getElementById("lists").appendChild(statebox)
        statebox.appendChild(stateboxbuttonsbox)
            stateboxbuttonsbox.appendChild(stateboxbuttonadd)
                stateboxbuttonadd.appendChild(spanadd)
            stateboxbuttonsbox.appendChild(stateboxbuttonsettings)
                stateboxbuttonsettings.appendChild(spansettings)       
            stateboxbuttonsbox.appendChild(stateboxbuttondelete)
                stateboxbuttondelete.appendChild(spandelete)
        statebox.appendChild(statename)
            //fixing statebox listener
            statebox.addEventListener("dragover", e => {
                e.preventDefault()
                const task = document.querySelector('.dragging')
                if(statebox != task.parentElement.parentElement)
                {
                    statebox.appendChild(task)
                }
            })
}

//task drag drop
const tasks = document.querySelectorAll('.task')
const stateboxes = document.querySelectorAll('.statebox')

tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
        task.classList.add("dragging")
    })

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging")
    })
})

stateboxes.forEach(statebox => {
    statebox.addEventListener("dragover", e => {
        e.preventDefault()
        const task = document.querySelector('.dragging')
        if(statebox != task.parentElement.parentElement)
        {
            statebox.appendChild(task)
        }
    })
})

//adduser button
adduserbutton.addEventListener("click", () => 
{
    const addusercontainter = document.getElementById("adduser");
    addusercontainter.style.display = "flex"
    const exitbutton = document.getElementById("close")
    exitbutton.addEventListener("click", () =>
    {
        addusercontainter.style.display = "none"
    })
})

titleinput.value = "Title"
descriptioninput.value = "Description"

//on hover input edit icon
editinputs.forEach((editinput) => 
{
    editinput.addEventListener("mouseover", () => 
    {
        const editicons = editinput.querySelectorAll("span")
        editicons.forEach(editicon => {
            editicon.style.visibility = "visible"
        })
    })
    editinput.addEventListener("mouseleave", () =>
    {
        const editicons = editinput.querySelectorAll("span")
        editicons.forEach(editicon => {
            editicon.style.visibility = "hidden";
        })
    })
})