const BaseJoi = require('Joi');
const JoiCountryExtension = require('joi-country-extension');
const Joi = BaseJoi.extend(JoiCountryExtension);

const schema = Joi.object().keys({
    author: Joi.string().required(),
    country: Joi.string().country(),
    imageLink: Joi.string(),
    language: Joi.string(),
    link: Joi.string().uri({scheme: ['http', 'https']}).required(),
    pages: Joi.number(),
    title: Joi.string(),
    year: Joi.date().max('2018').iso(),
});

let val = {
    author: 'Tejas Neema',
    email: 'tejas.neema@brillio.com',
    country: 'IN',
    imageLink: 'images/something.jpg',
    language: 'Hindi',
    link: 'http://outlook.brillio.com',
    pages: 233,
    title: 'Something to be',
    year: 2018,
};

Joi.validate(val, schema, (err, value) => {
    if(err) console.log(err);
    else console.log('is valid');
})