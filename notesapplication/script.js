var addbutton = document.querySelector(".addbutton")
var notesplace = document.querySelector(".notesplace")
var clear = document.querySelector(".clear")
var popupbox = document.querySelector(".popupbox")
var popuptitle = document.querySelector(".popup_title p")
var closeicon = document.querySelector(".popup_title i")
var creatnote = document.querySelector(".addform")
var titleofnote = document.querySelector(".popup_content input")
var contentofform = document.querySelector(".popup_note textarea")
var editform = document.querySelector(".editform")
var darkbutton = document.querySelector(".toogle")

// var editpopup = document.querySelector(".popupboxedit")
// var editbox_title = document.querySelector(".popup_titleedit p")
// var editbox_closeicon = document.querySelector(".popup_titleedit i")
// var editbox_creatnote = document.querySelector(".addformedit")
// var editbox_titleofnote = document.querySelector(".popup_content input")
// var contentofform = document.querySelector(".popup_note textarea")
// var editform = document.querySelector(".editform")
var months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


// elements of the notes div

function closepopuponclick(){
    document.addEventListener("click",  function(event){
        if(notesplace.childElementCount == 0){
            if(popupbox.classList.contains("show")){
             if(!popupbox.contains(event.target)
                 && !addbutton.contains(event.target) 
                 && !darkbutton.contains(event.target)){
                    popupbox.classList.remove("show");               
            }
        }
    }
    })
}
closepopuponclick();



//      creating the notes div
let count = 0 
creatnote.addEventListener("click", function(event){
    event.preventDefault();
    count++
    if(titleofnote.value != ""  && contentofform.value !=""){
        
        var notes = document.createElement("div");
        notes.className="notes"
        notes.id = count
        
        popuptitle.innerText = "Make New Note ";
        var headind_div = document.createElement("div");
        headind_div.className="heading_div"
        
        
        var noteno = document.createElement("h3")
        var notedate = new Date()
        month = months[notedate.getMonth()]
        day = notedate.getDate()
        year = notedate.getFullYear()
        noteno.innerText = `${month} ${day}, ${year}`
        

        var h3 = document.createElement("h3")
        var heading = document.querySelector(".popup_content input").value
        h3.innerText = heading

        var headind_div_right = document.createElement("div")
        headind_div_right.className="heading_div_right"

        
        var dropmenu = document.createElement("ul")
        dropmenu.className="dropmenu"
        var menu = document.createElement("button")
        menu.className="menu"
        menu.innerText="⁝"

        var li = document.createElement("li")
        li.className="menuli"
        var deletenote = document.createElement("button")
        deletenote.className="deletenote"
        deletenote.innerText="🗑 Delete"

        var editnote = document.createElement("button")
        editnote.className="editnote"
        editnote.innerText="✎ Edit"
        

        // var closenote = document.createElement("i")
        // closenote.className="fa fa-close"

        
        
        var note_preview = document.createElement("div")
        note_preview.className="note_preview"
      

        var note_value = document.createElement("p")
        var show_note = document.querySelector(".popup_note textarea").value
        note_value.innerText = show_note
        
        notesplace.appendChild(notes)
        notes.appendChild(headind_div)
        notes.appendChild(note_preview)
        headind_div.appendChild(noteno)
        headind_div.appendChild(headind_div_right)
        headind_div_right.appendChild(dropmenu)
        dropmenu.appendChild(menu)
        dropmenu.appendChild(li)
        li.appendChild(deletenote)
        li.appendChild(editnote)
        note_preview.appendChild(h3)
        note_preview.appendChild(note_value)
        


        // function of menu button
        menu.addEventListener("click", function(){
            if(li.className.includes("show")){
                li.classList.remove("show")
            }
            else{
                li.classList.add("show")
            }
        })
       

///  showing off the pop up menu after work
        popupbox.classList.remove("show")
        titleofnote.value=""
        contentofform.value=""

// creating the function to delte a perticular note
    deletenote.addEventListener("click", function(){
        notes.remove(notes)
    })


    editnote.addEventListener("click", function () {
        popupbox.classList.add("show")
        // editpopup.classList.add("show")
        // changing popup box credentials:
        popuptitle.innerText = "Update Your Note";
        titleofnote.value = h3.innerText;
        contentofform.value = note_value.innerText;
        li.classList.remove("show");
        editform.classList.add("show")
        
        
        
        // Edit note on form submission
        editform.onclick = function () {
            h3.innerText = titleofnote.value;
            note_value.innerText = contentofform.value;
            popupbox.classList.remove("show");
            editform.classList.remove("show");
            popuptitle.innerText = "Make New Note ";
        };
        
        document.addEventListener("click", function(event){
            if(popupbox.classList.contains("show")){
                const isClickOnEditNoteButton = Array.from(document.querySelectorAll('.editnote')).some(button => button.contains(event.target));
                if(notesplace.childElementCount > 0){
                if(!popupbox.contains(event.target) &&
                    !isClickOnEditNoteButton &&
                    // !editnote.contains(event.target) && 
                    !darkbutton.contains(event.target) && 
                    !addbutton.contains(event.target)){
                            popupbox.classList.remove("show")
                }
            }
            }
        })
    });


    document.addEventListener("click", function(event){
        if(li.classList.contains("show")){
            if(!li.contains(event.target) && 
                !menu.contains(event.target) && 
                !darkbutton.contains(event.target) && 
                !editnote.contains(event.target)){
                        li.classList.remove("show")
            }
            
        }
    })

    
    
}

    else{
        if(contentofform.value == ""){
        alert("Write somethings in Notes")
    }
        if(titleofnote.value == ""){
            alert("Write the Title First")
        }
    }
      
})
    






    

// creating the delete all button
clear.addEventListener("click", function(){
        notesplace.replaceChildren()
        count = 0
    })
    
// creating the add new note button   
addbutton.addEventListener("click", function(){
    popupbox.classList.add("show")
    titleofnote.value=""
    contentofform.value=""
    editform.classList.remove("show")     
})  

// creating the close item button 
closeicon.addEventListener("click", function(){
    popupbox.classList.remove("show")
    titleofnote.value=""
    contentofform.value=""
})

//impleament darkmode
var dark = document.getElementById("chek")
dark.addEventListener('change', function(){
    if(this.checked){
    document.querySelector(".header").classList.add("darkmode_header")
    document.querySelector("body").classList.add("darkmode_body")
    popupbox.classList.add("darkmode_popupbox")
    notesplace.classList.add("darkmode_notes")
}
else{
    document.querySelector(".header").classList.remove("darkmode_header")
    document.querySelector("body").classList.remove("darkmode_body")
    popupbox.classList.remove("darkmode_popupbox")
    notesplace.classList.remove("darkmode_notes")
    }
})



