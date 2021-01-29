import React from 'react';

export default function UserList(props) {
    const { tList } = props;
    console.log('array', tList);
        return(
        <div>{
            tList.map((tMember, id) => (
            <div key={id}>
                <h2>Congrats, {tMember.name}!</h2>
                <h2>Your <strong>{tMember.pizzaSize} Pizza</strong> is on it's way!</h2>
            </div>
        ))
        }</div>
    )
}