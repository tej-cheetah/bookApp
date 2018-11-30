let _ = require('lodash');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let sinon = require('sinon');

chai.use(chaiHttp);

describe('bookApp', () => {
    let beginServe;
    before(() => {
        beginServe = chai.request('localhost:4000');

        this.console = {
        }      
    });

    after(() => {
    })

    describe(':GET', () => {
        context('on success', () => {
            it('/books Should return list of books', (done) => {
                beginServe.get('/books').end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200)
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body.every(i => {
                        i.should.be.a('object');
                        i.should.have.property('title');
                        Object.keys(i).length.should.equals(8);
                        });
                    done();
                    });
            });

            it('/books/search Should search book on the basis of query param', (done) => {
                beginServe.get('/books/search?text=tal').end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.status.should.be.a('string')
                    res.body.searchResult.should.be.a('array')
                    res.body.status.should.equals(`${res.body.searchResult.length} search result found`)
                    res.body.searchResult.every(i => {
                        i.should.be.a('object');
                        i.should.have.property('author');
                        i.should.have.property('country');
                        i.should.have.property('imageLink');
                        i.should.have.property('language');
                        i.should.have.property('link');
                        i.should.have.property('pages');
                        i.should.have.property('title');
                        i.should.have.property('year');
                        Object.keys(i).length.should.equals(8);
                    });
                    done();
                });
            });
        });

        context('on fail', () => {
            it('/books/search Should search book on the basis of query param and return 0 search result found', (done) => {
                beginServe.get('/books/search?text=txz').end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);
                    res.body.status.should.equals(`0 search result found`)
                    done();
                });
            });
        });
    });

    describe(':POST', () => {
        let book = {
            author: "teas",
            country: "France/Belgium",
            imageLink: "images/memoirs-of-hadrian.jpg",
            language: "French",
            link: "http://issee.com",
            pages: 408,
            title: "Memoirs of Tejas",
            year: 1951
        }

        context('on success', () => {
            it('/books/add should add book to the file', (done) => {
                beginServe.post('/books/add').type('form').send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.equals('Book has been added to the file')
                done();
                });
            });
        });

        context('on fail', () => {
            it('/books/add return "Error: Book Already Exists"', (done) => {
                beginServe.post('/books/add').type('form').send(book)
                .end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);
                    res.text.should.equal('Error: Book Already Exists');
                done();
                });
            });
        });
    });

    describe(':PUT', () => {
        let book = {
            author: "escape",
            country: "India",
            imageLink: "images/memoirs-of-hadrian.jpg",
            language: "Hindi",
            link: "http://issssee.com",
            pages: 408,
            title: "Memoirs of Tejas",
            year: 1951
        }

        context('on success', () => {
            it('/books/update should update book to the file', (done) => {
                beginServe.put('/books/update').type('form').send(book)
                .end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);
                    res.text.should.equals('Book has been UPDATED')
                done();
                });
            });
        });
    });

    describe(':DELETE', () => {

        context('on success', () => {
            it('/books/update should delete book from the file', (done) => {
                beginServe.del('/books/delete?text=memoirs of tejas').end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);            
                    res.text.should.equals('Book has been DELETED')
                done(); 
                });
            });
        });

        context('on fail', () => {
            it('/books/update should return Error: Book with that title does not exists', (done) => {
                beginServe.del('/books/delete?text=memoirs of tejas').end((err, res) => {
                    if(err) return done(err);
                    res.should.have.status(200);  
                    res.text.should.equals('Error: Book with that title does not exists')
                done();
                });
            });            
        });
    });
});