class Book{
    constructor(title, author, isbn, actions){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.actions = actions;
    }
}

class userInterface{
    constructor(){
        this.titeInput = document.getElementById('titleInput');
        this.authorInput = document.getElementById('authorInput');
        this.isbnInput = document.getElementById('isbnInput');
        this.tableOutput = document.getElementById('tableOutput')
        this.formSubmit = document.getElementById('formSubmit')

        this.book = [];
    }

    bindEventListners(){
        this.formSubmit.addEventListener('submit', (e) => this.onFormSubmit(e)) // class function instead of a anonamous function// another function needs to be called to call this class function///It created its own this.
    }

    onFormSubmit(event){
        event.preventDefault();
        // i need to get the input values of each inputs
        const book = new Book(
            this.titeInput.value,            
            this.authorInput.value,
            this.isbnInput.value
        )

        this.book.push(book);// when a book gets pushed into the array it populates the populateBooksTable
        this.populateBooksTable()

            this.titeInput.value = '',          
            this.authorInput.value = '',
            this.isbnInput.value = ''// reason for the empty string values are , when the input values are passed into the book , the inputs will refresh back to empty
    }


    //Method to populate books table
    populateBooksTable(){
        this.tableOutput.innerHTML = '';// table start off as empty

        for(const book of this.book){
            
            const row = document.createElement('tr');

            const titeTableCell = document.createElement('td');
            const authorTableCell = document.createElement('td');
            const isbnTableCell = document.createElement('td');
            const actionTableCell = document.createElement('td');
            
            const removeButton = document.createElement('button')

            titeTableCell.innerHTML = book.title;
            authorTableCell.innerHTML = book.author;
            isbnTableCell.innerHTML = book.isbn;
            removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

            removeButton.addEventListener('click', (e) => this.onRemoveButtonClicked(book));//pass in what you want to delete in the second parameter

            actionTableCell.append(removeButton);
            row.append(titeTableCell);
            row.append(authorTableCell);
            row.append(isbnTableCell);
            row.append(actionTableCell);

            this.tableOutput.append(row)
        }

    }

    onRemoveButtonClicked(deleteBook){ 
        this.book = this.book.filter((book) =>{
            return book.isbn !== deleteBook.isbn;
        })

        this.populateBooksTable();
    }
}

const ui = new userInterface();
ui.bindEventListners();
