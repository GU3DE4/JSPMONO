import Joi from 'joi';

export const establishmentSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot be longer than 100 characters'
    }),

  address: Joi.string()
    .min(5)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Address is required',
      'string.min': 'Address must be at least 5 characters long',
      'string.max': 'Address cannot be longer than 200 characters'
    }),

  phone: Joi.string()
    .pattern(/^\+?[\d\s-()]{10,}$/)
    .required()
    .messages({
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Please enter a valid phone number',
    })
}); 