const fs = require('fs');
const _ = require('lodash');

const bookServices = {};

bookServices.searchBook = (query, jsonBookData, matchCase) => {

const matchAuthTitle = (o) => { return o.author.match(new RegExp(query, 'gi')) || o.title.match(new RegExp(query, 'gi')) };
const matchTitle = (o) => { return o.title.match(new RegExp(`^${query}$`, 'gi'))};

// in case 0 = search in both author and title
// in case 1 = search only for title an exact match

    switch(matchCase) {
        case 0:
            // console.log('substring will be checked for author and tile');
            return _.filter(jsonBookData, matchAuthTitle);
        
        case 1:
            // console.log('exact match of title will be done and bookIndex, bookObj, boolVal of element will be returned');
            let index = _.findIndex(jsonBookData, matchTitle),
                book = jsonBookData[index],
                bool = (Object.prototype.toString.call(book) === '[object Object]');
            return {bookIndex: index, bookObj: book, boolVal: bool};
    };        
};

bookServices.readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) reject(err);
            else
            resolve({val: JSON.parse(data), status: 'File read complete'});
        });
    });
};

bookServices.writeFile = (file, dataToWrite) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(dataToWrite, null, 2), 'utf-8', (err) => {
            if(err) reject(err);
            else
            resolve();
        });
    });
};

module.exports = bookServices;