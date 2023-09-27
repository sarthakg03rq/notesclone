// const nc =document.querySelector(".notes-container")
// const createbtn =document.querySelector(".btn")
// let notes=document.querySelector(".input-box")

// function show() {
//     JSON.stringify(nc)=localStorage.getItem("notes");
// }

// function storage() {
//     localStorage.setItem("notes", JSON.stringify(nc));
// }

// createbtn.addEventListener("click", ()=>{
//     let ibox=document.createElement("p");
//     let img=document.createElement("img");
//     ibox.className="input-box";
//     ibox.setAttribute("contenteditable", "true");
//     img.src="delete.png";
//     nc.appendChild(ibox).appendChild(img);
// })

// nc.addEventListener("click", function(e){
//     if(e.target.tagName==="IMG"){
//         e.target.parentElement.remove();
//         storage();
//     }
//     else if(e.target.tagName==="P"){
//         notes=document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup=function*(){
//                 storage();
//             }
//         });
//     }
// })

// document.addEventListener("keydown", event=>{
//     if(event.key==="Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })

// script.js

// // Function to create a new note
// function createNote() {
//     const notesContainer = document.querySelector('.notes-container');
  
//     // Create a new note element
//     const note = document.createElement('p');
//     note.contentEditable = true;
//     note.className = 'input-box';
  
//     // Create a delete button inside the note
//     const deleteButton = document.createElement('img');
//     deleteButton.src = 'delete.png';
//     deleteButton.addEventListener('click', function () {
//       // Remove the note when the delete button is clicked
//       notesContainer.removeChild(note);
//     });
  
//     // Append the delete button to the note
//     note.appendChild(deleteButton);
  
//     // Append the note to the notes container
//     notesContainer.appendChild(note);
//   }
  
//   // Add a click event listener to the "Create Notes" button
//   const createNotesButton = document.querySelector('.btn');
//   createNotesButton.addEventListener('click', createNote);
  



// // Select the button and notes container
// const createNoteButton = document.querySelector('.btn');
// const notesContainer = document.querySelector('.notes-container');

// // Add a click event listener to the button
// createNoteButton.addEventListener('click', () => {
//   // Create a new note element
//   const newNote = document.createElement('p');
//   newNote.contentEditable = true;
//   newNote.className = 'input-box';
  
//   // Create a delete button for the note
//   const deleteButton = document.createElement('img');
//   deleteButton.src = 'delete.png';
//   deleteButton.className = 'delete-button';
  
//   // Add a click event listener to the delete button
//   deleteButton.addEventListener('click', () => {
//     // Remove the note when the delete button is clicked
//     notesContainer.removeChild(newNote);
//   });
  
//   // Append the delete button to the note
//   newNote.appendChild(deleteButton);
  
//   // Append the new note to the notes container
//   notesContainer.appendChild(newNote);
// });



const nc=document.querySelector(".notes_div");

const create_btn=document.querySelector(".btn");


let notes=document.querySelectorAll("input_data");

function show_notes(){
    nc.innerHTML=localStorage.getItem("notes");

}
show_notes();
function updateStorage(){
    localStorage.setItem("notes" , nc.innerHTML);

}

create_btn.addEventListener("click" ,() => {
    let inputBox=document.createElement("p");

    let img=document.createElement("img");
    inputBox.className="input_data";
    inputBox.setAttribute("contenteditable" , "true");
    img.src="delete.png";
    nc.appendChild(inputBox).appendChild(img);
}) 

nc.addEventListener("click",function(f){

    if(f.target.tagName==="IMG"){
        f.target.parentElement.remove();
        updateStorage();
    }
    else if(f.target.tagName==="P"){
        notes=document.querySelectorAll(".input_data");
        notes.forEach(x => {
            x.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})