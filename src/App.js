import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";
import Nav from './pizza/Nav';
import Home from './pizza/Home';
import PizzaForm from './pizza/PizzaForm';
import UserList from "./pizza/FormData";
import * as yup from 'yup';
import formSchema from './validation/formSchema';


const defaultValues = {
  name: '',
  terms: false,
  pizzaSize: '',
  pepperoni: false,
  pineapple: false,
  ham: false,
  bacon: false,
  specialInstructions: '',
};

const defaultErrors = {
  name: '',
}

function App() {

  const [formValues, setFormValues] = useState(defaultValues);
  const [pizzaInfo, setPizzaInfo] = useState([]); 
  const [errors, setErrors] = useState(defaultErrors); 
  const [disabled, setDisabled] = useState(true);

  const change = (event) => {
    const { name, value } = event.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: 
    event.target.type === "checkbox" ? event.target.checked : event.target.value,
  });
};
 
 const submit = (event) => {
 
  event.preventDefault();
 
  axios
    .post("https://reqres.in/api/users", formValues)
    .then((res) => {
      setPizzaInfo([res.data, ...pizzaInfo]);
    console.log('POST DATA:', res.data);
  }).catch((err) => {
    console.log(err);
});

  const newData = {
    name: formValues.name.trim(),
    specialInstructions: formValues.name.trim(),
  };

  setPizzaInfo([...pizzaInfo, newData]); 
  setFormValues(defaultValues);
};

const validate = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then((value) => {
      setErrors({ 
        ...errors,
        [name]: "" });
    })
    .catch((err) => {
      setErrors({ 
        ...errors, 
        [name]: err.errors[0] }); 
    });
};

useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

  return (
    <div>
      <Nav />
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm formValues={formValues} change={change} submit={submit} disabled={disabled} errors={errors} />
        </Route>
      <UserList tList={pizzaInfo} key={pizzaInfo.id}/>
    </div>
  );
}

export default App;