const notesContainer = document.querySelector(".notes-container");
const createBtn = document.getElementById("createBtn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); 
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/deleted.png";
    img.alt = "delete";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(n => {
            n.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown" , event =>{
       if(event.key === "Enter"){
            document.execCommand("insertLineBreak");
            e.preventDefault();
       }
})