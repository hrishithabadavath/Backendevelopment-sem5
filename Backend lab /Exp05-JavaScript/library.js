// Library book management

// 1. Create an array to store books
const library = [];

// 2. Function to add a book
function addBook(title, author) {
    const book = {
        title: title,
        author: author
    };

    library.push(book);

    console.log("Book added:", book);
}

// 3. Function to find a book by title
function findBook(title) {
    const book = library.find(function(book) {
        return book.title.toLowerCase() === title.toLowerCase();
    });

    if (book) {
        console.log("Book found:", book);
        return book;
    } else {
        console.log("Book not found");
        return null;
    }
}

// 4. Test the functions

addBook("The Alchemist", "Paulo Coelho");
addBook("Wings of Fire", "A.P.J. Abdul Kalam");
addBook("Harry Potter", "J.K. Rowling");

console.log("\nAll Books:");
console.log(library);

console.log("\nSearching for a book:");
findBook("Wings of Fire");

console.log("\nSearching for another book:");
findBook("JavaScript Basics");