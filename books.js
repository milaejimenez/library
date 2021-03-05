
const myLibrary = []
const library = document.querySelector(".library")
const button = document.querySelector(".add_book")
const books = document.querySelector(".books")
const formular = document.querySelector(".formular")
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const checkRead = function() {
	if(read.checked) {
		return 'Read'
	} else return 'Not read yet';
}
const bookElements = [];

function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = checkRead();
}

function addBookToLibrary(title, author, pages, haveRead) {
	const book = new Book(title.value, author.value, pages.value, haveRead.value)
	myLibrary.push(book);
}


function display() {
	let last = myLibrary[myLibrary.length - 1]
	const lastAdded = document.createElement('div');
	lastAdded.innerHTML = `<p>${last.title}</p>
					 	   <p>${last.author}</p>
					 	   <p>${last.pages} pages </p>
					 	   <p class="read_status">${last.haveRead}</p>
					 	   <button class="remove">Remove</button>
					 	   <button class="change">Change status</button>`;
	lastAdded.classList.add("book_item")
	books.appendChild(lastAdded);
	lastAdded.setAttribute('data-set', myLibrary.length - 1);
	bookElements.push(lastAdded);
}

button.addEventListener('click', function () {
	formular.style.display = 'flex';
	button.style.display = 'none';
})

library.addEventListener("click", function(event) {
	const thisBook = event.target.parentElement;
	const bookNumber = parseInt(thisBook.getAttribute('data-set'));
     if ( event.target.className === 'save_book') {
          addBookToLibrary(title, author, pages, checkRead());
          formular.style.display = 'none'
          button.style.display = 'block'
          display()
     } if (event.target.className === 'remove') {;
		thisBook.remove();
		myLibrary.splice(bookNumber, 1)
	} if (event.target.className === 'change') {
		let haveRead = myLibrary[bookNumber].haveRead;
		
		if (haveRead == 'Not read yet') { haveRead = 'Read'
		} else { haveRead = 'Not read yet'}
		myLibrary[bookNumber].haveRead = haveRead;
		
		const readStatus = thisBook.querySelector('.read_status');
		readStatus.textContent = haveRead;
	}
})


	

// for (let i=0; i > myLibrary.length; i++) {
// 	const bookElements = document.querySelectorAll(".book_item");
// 	console.log(bookElements[i])
// }








