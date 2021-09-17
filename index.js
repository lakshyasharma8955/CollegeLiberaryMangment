console.log('project 2:bulding a college library website');

// CONSTRUCTOR 
function Book(Name, author, type) {
    this.name = Name;
    this.author = author;
    this.type = type;
}

// DISPLAY CONSTRUCTOR
function DISPLAY() {

}

// ADD METHODS TO DISPLAY PROTOTYPE
DISPLAY.prototype.add = function (book) {
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uistring = `<tr> 
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
               </tr>`;
    tableBody.innerHTML += uistring;


}
// IMPLEMENT THE CLEAR FUNCTION
DISPLAY.prototype.clear = function () {

    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// IMPLEMENT THE VALIDATE FUNCTION
DISPLAY.prototype.validate = function (book) {

    if (book.name.length < 2 || book.author.length < 2) {

        return false;
    }
    else {
        return true;
    }
}
DISPLAY.prototype.show = function (type, displaymessage) {

    let message = document.getElementById('message');
    message.innerHTML = `
                                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>Message!</strong> ${displaymessage}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}



// ADD SUBMIT EVENT LISTNER TO LIBRARYFORM

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have Submitted library form');
    let Name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let Fiction = document.getElementById('Fiction');
    let programing = document.getElementById('programing');
    let cooking = document.getElementById('cooking');

    if (Fiction.checked) {

        type = Fiction.value;
    }

    else if (programing.checked) {

        type = programing.value;
    }
    else if (cooking.checked) {

        type = cooking.value;
    }

    let book = new Book(Name, author, type)
    console.log(book);
    let display = new DISPLAY();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // SHOW ERROR TO THE USER
        display.show('danger', 'sorry you cannot add this book');
    }

    e.preventDefault();
}





// TODOS

// 1.  STORE ALL THE DATA TO THE LOCAL STORAGE
// 2.  GIVE ANOTHER COLOUM AS AN OPTION TO DELETE THE BOOK
// 3.  ADD A SCROLL BAR TO THE VIEW