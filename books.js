
let myLibrary = []


function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = 'not read yet';
	this.info = function() {
		const bookInfo = `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`
		return bookInfo
	}
}


function addBookToLibrary(title, author, pages, haveRead) {
	const book1 = new Book(title, author, pages, haveRead)
	myLibrary.push(book1);
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')


function display() {
	myLibrary.forEach(book => )
}