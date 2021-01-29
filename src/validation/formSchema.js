import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Your name needs to be at least 2 characters"), 
  pizzaSize: yup
    .string()
    .required("Please Select Size"),
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  ham: yup.boolean(),
  bacon: yup.boolean(),
  terms: yup
    .boolean()
    .oneOf([true], "Please agree to terms"),
  specialInstructions: yup.string(),
});