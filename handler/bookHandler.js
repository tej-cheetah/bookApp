const bookFile = 'Books.json';
const bookServices = require('../services/bookServices.js');
const bookValidation = require('../util/bookValidation.js');

const bookHandler = {};

// validate from bookValidation resolve to an object which has properties 1st: val and 2nd: status
// ReadFile from bookServices resolve to an object which has properties 1st: val and 2nd: status
// writeFile from bookServices resolve to no value or an empty object

bookHandler.getBookList = (req, res) => {
    bookServices.readFile(bookFile)
    
    .then((_resolveData) => {
        console.log(_resolveData.status);
        res.send(_resolveData.val);
    })
    .catch((_rejectedData) => {
        console.log(_rejectedData);
        res.send(_rejectedData);
    });
};

bookHandler.findBook = (req, res) => {
    const matchAuthTitle = 0;
    const query = req.query.text;
    
    bookServices.readFile(bookFile)

    .then((_resolveData) => {
        console.log(_resolveData.status);
        // if object returned is empty: it should be handled well (unHandled yet)
        var arrOfBook = bookServices.searchBook(query, _resolveData.val, matchAuthTitle);
        res.send({status: `${arrOfBook.length} search result found`, searchResult: arrOfBook});
    })
    
    .catch((_rejectedData) => {
        console.log(_rejectedData);
        res.send(_rejectedData);
    })   

};

bookHandler.addBook = (req, res) => {
    const matchTitle = 1;
    let bookToAdd;

    const content = {
        author: req.body.author,
        country: req.body.country,
        imageLink: req.body.imageLink,
        language: req.body.language,
        link: req.body.link,
        pages: req.body.pages,
        title: req.body.title,
        year: req.body.year
    };

    bookValidation.validate(content, bookValidation.validBookScheme)

    .then((_resolvedData) => {
        bookToAdd = _resolvedData.val
        console.log(_resolvedData.status);
        return bookServices.readFile(bookFile);
    })

    .then((_resolvedJsonData) => {
        //take care of Void 0: coz it might reject wrong error message when writing the file.
        console.log(_resolvedJsonData.status)
        let dataToWrite = _resolvedJsonData.val;
        if(bookServices.searchBook(bookToAdd.title, dataToWrite, matchTitle).boolVal) throw Error('Book Already Exists');            
        else dataToWrite.push(bookToAdd);
        return bookServices.writeFile(bookFile, dataToWrite);
    })

    .then((_resolvedData) => {
        console.log('Book has been added to the file');
        // res.send('Book has been added to the file, ' + _resolvedData.status);
        res.send('Book has been added to the file');
    })

    .catch((_rejectedData) => {
        console.log(_rejectedData);
        // res.send('ADDING book to the file has failed, ' + _rejectedData);
        res.send(_rejectedData + '');
    });

};

bookHandler.updateBook = (req, res) => {
    //exact match title (val is 2 to get the index for book)        
    const matchTitle = 1;
    let bookToUpdate;

    const content = {
        author: req.body.author,
        country: req.body.country,
        imageLink: req.body.imageLink,
        language: req.body.language,
        link: req.body.link,
        pages: req.body.pages,
        title: req.body.title,
        year: req.body.year
    };

    bookValidation.validate(content, bookValidation.validBookScheme)

    .then((_resolvedData) => {
        bookToUpdate = _resolvedData.val
        console.log(_resolvedData.status);
        return bookServices.readFile(bookFile);
    })

    .then((_resolvedJsonData) => {
        let dataToWrite = _resolvedJsonData.val;
        const indexOfBook = bookServices.searchBook(bookToUpdate.title, dataToWrite, matchTitle).bookIndex;
        (indexOfBook >= 0) ? dataToWrite.splice(indexOfBook, 1, bookToUpdate) : dataToWrite.push(bookToUpdate); 
        return bookServices.writeFile(bookFile, dataToWrite);
    })

    .then((_resolvedData) => {
        console.log('Book has been UPDATED');
        // res.send('Book has been UPDATED, ' + _resolvedData.status);
        res.send('Book has been UPDATED');
    })

    .catch((_rejectedData) => {
        console.log('Unable to UPDATE the book ');
        // res.send('Unable to UPDATE the book ' + _rejectedData);
        res.send(_rejectedData + '');
    });
};

//HardDelete
bookHandler.deleteBook = (req, res) => {
    //collect jsonBookData
    //collect title to delete
    //collect mathCase to search
    //pass all the three for search
    //if got existing element use bookUtil to splice off the element
    //else return: book does not exit
    const matchTitle = 1;
    const query = req.query.text;
    // console.log(query)
    // console.log(req.method);
    bookServices.readFile(bookFile)

    .then((_resolvedJsonData) => {
        let dataToWrite = _resolvedJsonData.val;
        const indexOfBook = bookServices.searchBook(query, dataToWrite, matchTitle).bookIndex;
        if(indexOfBook >= 0) dataToWrite.splice(indexOfBook, 1);
        else throw Error('Book with that title does not exists');
        return bookServices.writeFile(bookFile, dataToWrite);
    })

    .then((_resolvedData) => {
        console.log('Book has been DELETED');
        // res.send('Book has been DELETED ' + _resolvedData.status);
        res.send('Book has been DELETED');
    })

    .catch((_rejectedData) => {
        console.log('Book cant be DELETED');
        // res.send('Book cant be DELETED ' + _rejectedData);
        res.send(_rejectedData + '');
    });    
};

module.exports = bookHandler;