var titleinput = document.getElementById("title");
var descriptioninput = document.getElementById("description");
const editinputs = document.querySelectorAll(".editinput");
const adduserbutton = document.getElementById("adduserbtn");

titleinput.value = "Title";
descriptioninput.value = "Description";

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