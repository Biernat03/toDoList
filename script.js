var titleinput = document.getElementById("title");
var descriptioninput = document.getElementById("description");
const editinputs = document.querySelectorAll(".editinput");

titleinput.value = "Title";
descriptioninput.value = "Description";

editinputs.forEach((editinput) => 
{
    editinput.addEventListener("mouseover", () => 
    {
        const editicons = editinput.querySelectorAll("span");
        editicons.forEach(editicon => {
            editicon.style.display = "block"; 
        });
    });
    editinput.addEventListener("mouseleave", () =>
    {
        const editicons = editinput.querySelectorAll("span");
        editicons.forEach(editicon => {
            editicon.style.display = "none"; 
        });
    });
});

function log()
{
    console.log(titleinput);
}