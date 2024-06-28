const Joi = require("joi");

const createValidation = Joi.object({
  companyName: Joi.string().required().messages({
    'string.empty': 'companyName is required'
  }),
  headOfficeAddress: Joi.string().required().messages({
    'string.empty': 'headOfficeAddress is required'
  }),
  country: Joi.string().required().messages({
    'string.empty': 'country is required'
  }),
  postalCode: Joi.string().required().messages({
    'string.empty': 'postalCode is required'
  }),
  city: Joi.string().required().messages({
    'string.empty': 'city is required'
  }),
  countryCode: Joi.string().required().messages({
    'string.empty': 'countryCode is required'
  }),
  contactNumber: Joi.string().required().messages({
    'string.empty': 'contactNumber is required'
  })
});

module.exports = { createValidation };
