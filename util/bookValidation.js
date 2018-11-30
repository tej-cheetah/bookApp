const Joi = require('Joi');

const today = new Date();

let bookValidation = {};

// bookValidation.validBookScheme = Joi.object().keys ({
//     author: Joi.string().required(),
//     country: Joi.string().trim(),
//     imageLink: Joi.string().trim(),
//     language: Joi.string().trim(),
//     link: Joi.string().regex(/([http]|[https])://w{3}\./)
//     pages: Joi.number(),
//     title: Joi.string().trim(),
//     // .trim().when('pages', {
//     //     is: true,
//     //     then: Joi.string()
//     // }),
//     year: Joi.number().max(today.getFullYear())
// });

bookValidation.validBookScheme = Joi.object().keys ({
    author: Joi.string().required(),
    country: Joi.string().trim(),
    imageLink: Joi.string().trim(),
    language: Joi.string().trim(),
    link: Joi.string().uri({scheme: ['http','https']}).required(),
    pages: Joi.number(),
    title: Joi.string().trim(),
    year: Joi.number().max(today.getFullYear())
});

bookValidation.validate = (bodyData, bookSchema) => {
    return new Promise((resolve, reject) => {
        Joi.validate(bodyData, bookSchema, (err, value) => {
            if(err) reject(err);
            resolve({val: value, status: 'Data is valid to proceed'});
        });
    });
};

module.exports = bookValidation;