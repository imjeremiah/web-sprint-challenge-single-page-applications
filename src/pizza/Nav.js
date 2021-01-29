import React from 'react';
import { Link } from "react-router-dom";

export default function NavBlock (props) {
    return (
      <div>
        <Link to={`../`}>
            <div>Home</div>
        </Link>
      </div>
    );
  }