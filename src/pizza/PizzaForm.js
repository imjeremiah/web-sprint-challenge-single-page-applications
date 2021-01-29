import React from 'react';

export default function PizzaForm (props) {
    const { formValues, change, submit, disabled, errors } = props;
    return (
      <div>
        <form onSubmit={submit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={change}
            />
            <p>{errors.name}</p> 
          </label>
     
          <label>
            Pizza Size
            <select 
                name="pizzaSize" 
                value={formValues.pizzaSize} 
                onChange={change}
            >
                <option value="">------select size------</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
          </label>

          <p>Select Your Toppings:
          <label>
            Pepperoni
            <input 
                type="checkbox" 
                name="pepperoni" 
                checked={formValues.pepperoni} 
                onChange={change}/> 
          </label>
          <label>
            Pineapple
            <input 
                type="checkbox" 
                name="pineapple" 
                checked={formValues.pineapple} 
                onChange={change}/> 
          </label>
          <label>
            Ham
            <input 
                type="checkbox" 
                name="ham" 
                checked={formValues.ham} 
                onChange={change}/> 
          </label>
          <label>
            Bacon
            <input 
                type="checkbox" 
                name="bacon" 
                checked={formValues.bacon} 
                onChange={change}/> 
          </label>
          </p>

          <label>
            Special Instructions:
            <input
              type="text"
              name="specialInstructions"
              value={formValues.specialInstructions}
              onChange={change}
            />
            <p>{errors.specialInstructions}</p> 
          </label>

          <label>
            Agree to Terms:
            <input 
                type="checkbox" 
                name="terms" 
                onChange={change}/>
          </label>
         <p><button disabled={disabled}>Place Order!</button></p>
        </form>
      </div>
    );
}