let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");

let notesmodalopen = false;
let isTextTyped = false;

openModal.addEventListener("click" , openStickynote);

closeModal.addEventListener("click" , closeStickynote);

function openStickynote(){
    if(notesmodalopen){
        return;
    }

    let notesmodal = document.createElement("div");
    notesmodal.classList.add("notes-modal");
    notesmodal.innerHTML = `<div class="notes-text" contentEditable="true" spellcheck="false">Enter Your Text !</div>
    <div class="notes-filters">
        <div class="notes">
            <div class="save">
                <i class="fas fa-check"></i>
            </div>
            <div class="close">
                <i class="fas fa-trash"></i>
            </div>
        </div>
        <div class="note-filter yellow selected-filter"></div>
        <div class="note-filter green"></div>
        <div class="note-filter voilet"></div>
    </div>`;

    document.querySelector("body").append(notesmodal);
    notesmodalopen = true;

    let notestextiv = notesmodal.querySelector(".notes-text");
    notestextiv.addEventListener( "keypress" , handleKeyPress);

    let notesfilter = notesmodal.querySelectorAll(".note-filter");
    for(let i = 0; i < notesfilter.length; i++){
        notesfilter[i].addEventListener("click" , function(e){
            if(e.target.classList.contains("selected-filter")){
                return;
            }
            document.querySelector(".selected-filter").classList.remove("selected-filter");
            e.target.classList.add("selected-filter");
        });
    }
    notesmodal.querySelector(".save").addEventListener("click" , function(e){
        let noteSlip = document.createElement("div");
        noteSlip.classList.add("note-created");
        // daba.innerHTML =``
        document.querySelector(".notes-collector").append(noteSlip);
        closeStickynote();
    });

    notesmodal.querySelector(".save").addEventListener( "click" , function(){
        document.querySelector(".note-created").innerHTML = `<div class="note-slip">
        <h2>Hello !!!</h2>
        <i class="fas fa-trash"></i>
    </div>
    <p></p>`;
    });

    
    notesmodal.querySelector(".close").addEventListener("click" , closeStickynote);
}

function closeStickynote(e){
    if(notesmodalopen){
        document.querySelector(".notes-modal").remove();
        notesmodalopen = false;
        isTextTyped = false;
    }
}

function handleKeyPress(e){
    
    if(!isTextTyped){
        isTextTyped = true;
        e.target.textContent = "";
    }
}