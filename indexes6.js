console.log('this is es6 version of project 2');

class Book
{
    constructor(Name,author,type)
    {
        this.name=Name;
        this.author=author;
        this.type=type;

    }
}
class DISPLAY
{

   add(book) {
        console.log('Adding to UI');
       let tableBody = document.getElementById('tableBody');
        let uistring = `<tr> 
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                   </tr>`;
        tableBody.innerHTML += uistring;
    
    
    }

    clear() {

        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

   validate(book) {

        if (book.name.length < 2 || book.author.length < 2) {
    
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displaymessage) {

        let message = document.getElementById('message');
        let boldText;
        if(type==='success')
        {
            boldText = 'success';
        } 
        else
        {
            boldText = 'error';
        }
        message.innerHTML = `
                                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>${boldText}</strong> ${displaymessage}
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    }
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