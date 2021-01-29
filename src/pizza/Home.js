import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home (props) {
   
    const history = useHistory();
    return (
      <div onClick={() => history.push(`/pizza/PizzaForm`)}>
       
        <div>
          <strong>Click Here to Order Pizza!</strong>
        </div>
      </div>
    );
  }
