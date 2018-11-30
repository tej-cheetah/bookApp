const fs = require('fs');
const Joi = require('Joi');
const _ = require('lodash');

const bookSchema = require('../model/bookSchema.js');
const bookFile = 'testBooks.json';

module.exports = (req, res) => {
        
        const content1 = {
            author: req.body.author,
            country: req.body.country,
            imageLink: req.body.imageLink,
            language: req.body.language,
            link: req.body.link,
            pages: req.body.pages,
            title: req.body.title,
            year: req.body.year
        };

        // console.log(content1);

        function validateData() {
            return new Promise((resolve, reject) => {
                Joi.validate(content1, bookSchema, (err, value) => {
                    if(err) reject(err);
                    resolve({val: value, status: 'Data is valid to proceed'});
                });
            });
        };
        
        function readFile(dataToUpdate){
            return new Promise((resolve, reject) => {
                fs.readFile(bookFile, 'utf-8', (err, data) => {
                    if(err) reject(err);
                    resolve({fileData: data, dataToUpdate: dataToUpdate, status: 'File read completed'});
                });
            });
        };
        
        function writeFile(newDataToUpdate) {
            return new Promise((resolve, reject) => {
                if(typeof newDataToUpdate === 'object') {
                    fs.writeFile(bookFile, JSON.stringify(newDataToUpdate, null, 2), 'utf-8', (err) => {
                        if(err) reject(err);
                        resolve({status: 'File has been UPDATED'});
                    });                    
                } else {
                    reject('Book with that title already EXISTS, please try another title for your book');
                }
            });
        };

        // if book already exists, should it be thrown as an exception? or should be handled without it?
        function checkIfDoesNotExists(fileData, bookTitle) {
            const val = _.find(fileData, (obj) => {
                return obj.title.match(bookTitle);
            });

            // return -1 if the book exists;
            // return 1 if the book does not exists;
            return (typeof val === 'undefined')? true : false;
        };

        function addingBook(fileData, dataToUpdate) {
            fileData.push(dataToUpdate);
            return fileData;
        }

        //Program in execution
        validateData().then((_resolveData)=> {
            console.log(_resolveData.status);
            return readFile(_resolveData.val);
        })
        
        .then((_resolveObj) => {
            const regExpBookTitle = new RegExp(`\\b${_resolveObj.dataToUpdate.title}\\*b`, 'gi');
            const jsonFileData = JSON.parse(_resolveObj.fileData);

            const arrObject = checkIfDoesNotExists(jsonFileData, regExpBookTitle) ? addingBook(jsonFileData, _resolveObj.dataToUpdate) : console.log('Book title already exists');

            return writeFile(arrObject);
        })
        
        .then((_resolveVal) => {
            console.log(_resolveVal.status);
            res.send(_resolveVal.status);
        })
        
        .catch((_rejectData)=>{
            res.send(_rejectData);
        });
        //Program in execution
}