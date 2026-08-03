alert("JavaScript Loaded");
let notes = [];

function addEvent(){

    document
        .getElementById("addBtn")
        .addEventListener("click",saveNotes);

    document
        .getElementById("clearBtn")
        .addEventListener("click",clearNotes);

}

function saveNotes() {

    const input = document.getElementById("noteInput");

    const note = input.value;

    if (note.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";

    displayNotes();
}

function displayNotes(){

    const container=document.getElementById("notesContainer");

    container.innerHTML="";

    if(notes.length===0){

        container.innerHTML="<p>No notes available.</p>";

        return;

    }

    let html="<ul>";

    notes.forEach(function(note){

        html += `<li>${note}</li>`;

    });

    html += "</ul>";

    container.innerHTML=html;

}

function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();

}

function updateNotes() {

    const data = localStorage.getItem("notes");

    if (data) {
        notes = JSON.parse(data);
    }

    displayNotes();

}

function clearNotes(){

    if(confirm("Do you want to delete all notes?")){

        notes=[];

        localStorage.removeItem("notes");

        displayNotes();

    }

}

addEvent();

updateNotes();