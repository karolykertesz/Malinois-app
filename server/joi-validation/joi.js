const Joi = require("joi");

const singUpSchima = Joi.object({
  name: Joi.string().alphanum().min(7).max(50).required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
    })
    .min(8)
    .max(50),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .max(500),
});
const loginSchima = Joi.object({
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
    })
    .min(8)
    .max(50),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .max(500),
});

module.exports = { singUpSchima, loginSchima };
