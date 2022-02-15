import Joi from "@hapi/joi";

const validateEventSchema = Joi.object({
  additional_equipment: Joi.array().required().min(1).messages({
    "array.base": "at least one service should be selected",
    "array.empty": "at least one service should be selected",
    "array.min": "at least one service should be selected",
    "any.required": "at least one service should be selected",
  }),
  production_items: Joi.array().required().min(1).messages({
    "array.base": "at least one production item should be selected",
    "array.empty": "at least one production item should be selected",
    "array.min": "at least one production item should be selected",
    "any.required": "at least one production item should be selected",
  }),
  event_name: Joi.string().required().min(2).max(120).messages({
    "string.base": "event name should be at least 2 characters",
    "string.empty": "event name should be at least  2 characters",
    "string.min": "event name should be at least  2 characters",
    "string.max": "event name should be at least  2 characters",
    "any.required": "event name should be at least  2 characters",
  }),
  description: Joi.string().required().min(20).max(1000).messages({
    "string.base": "Description should be at least 20 characters",
    "string.empty": "Description should be at least  20 characters",
    "string.min": "Description should be at least  20 characters",
    "string.max": "Description should be at least  20 characters",
    "any.required": "Description should be at least  20 characters",
  }),
  address: Joi.string().required().min(2).max(120).label("Address").messages({
    "string.base": "Address should be at least 2 characters",
    "string.empty": "Address should be at least  2 characters",
    "string.min": "Address should be at least  2 characters",
    "string.max": "Address should be at least  2 characters",
    "any.required": "Address should be at least  2 characters",
  }),
  date: Joi.string().required().label("Date").messages({
    "string.base": "Event Date is required",
    "string.empty": "Event Date is required",
    "string.min": "Event Date is required",
    "string.max": "Event Date is required",
    "any.required": "Event Date is required",
  }),
  guests: Joi.number().required().label("Guests").messages({
    "number.base": "Guests should be valid number",
    "number.empty": "Guests should be valid number",
    "number.min": "Guests should be valid number",
    "any.required": "Guests should be valid number",
  }),
  placement: Joi.string()
    .required()
    .valid("indoor", "outdoor")
    .label("placement")
    .messages({
      "string.base": "placement should be either indoor or outdoor",
      "string.empty": "placement should be either indoor or outdoor",
      "string.min": "placement should be either indoor or outdoor",
      "any.required": "placement should be either indoor or outdoor",
      "any.valid": "placement should be either indoor or outdoor",
    }),
  duration: Joi.number().required().label("Duration").messages({
    "number.base": "Duration should be valid number",
    "number.empty": "Duration should be valid number",
    "number.min": "Duration should be valid number",
    "any.required": "Duration should be valid number",
  }),
  budget: Joi.number().required().label("Budget").messages({
    "number.base": "Budget should be valid number",
    "number.empty": "Budget should be valid number",
    "number.min": "Budget should be valid number",
    "any.required": "Budget should be valid number",
  }),
  budget_tbd: Joi.number().min(0).max(1).label("budget tbd").messages({
    "number.empty": "Did you need budget to Be discussed on!",
    "number.min": "Did you need budget to Be discussed on!",
    "number.max": "Did you need budget to Be discussed on!",
  }),
  duration_tbd: Joi.number().min(0).max(1).label("duration tbd").messages({
    "number.empty": "Did you need duration to Be discussed on!",
    "number.min": "Did you need duration to Be discussed on!",
    "number.max": "Did you need duration to Be discussed on!",
  }),
  artists: Joi.array().required().messages({
    "array.min": "Artists array required",
    "any.required": "Artists array required",
  }),
  name: Joi.string().required().min(2).max(120).messages({
    "string.base": "Your name should be at least 2 characters",
    "string.empty": "Your name should be at least  2 characters",
    "string.min": "Your name should be at least  2 characters",
    "string.max": "Your name should be at least  2 characters",
    "any.required": "Your name should be at least  2 characters",
  }),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.base": "email should be valid",
      "string.empty": "email should be valid",
      "string.min": "email should be valid",
      "string.max": "email should be valid",
      "any.required": "email should be valid",
    }),
  phone_number: Joi.string().required().min(11).messages({
    "string.base": "you should enter a valid mobile number",
    "string.empty": "you should enter a valid mobile number",
    "any.required": "you should enter a valid mobile number",
    "string.min": "you should enter a valid mobile number",
  }),
  additional_info: Joi.string().required().min(2).max(120).messages({
    "string.base": "Additional Infoormation should be at least 2 characters",
    "string.empty": "Additional Infoormation should be at least  2 characters",
    "string.min": "Additional Infoormation should be at least  2 characters",
    "string.max": "Additional Infoormation should be at least  2 characters",
    "any.required": "Additional Infoormation should be at least  2 characters",
  }),
});

export const validateEvent = (data) => {
  const result = validateEventSchema.validate(data);
  if (result.error) return { error: result.error.message };
  else return null;
};
