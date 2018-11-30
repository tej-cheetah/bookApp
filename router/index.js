module.exports = function(app) {
    app.use('/books', require('./bookController.js'));
}