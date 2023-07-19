const getTheTitles = function(bookDatabase) {
    let bookTitles = [];

    for(book of bookDatabase) bookTitles.push(book.title);

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
