import React from 'react';

const Person = (props) => {
    return( 
        <div>
            <h3>I'm {props.name}! I am {props.age}!</h3>
            <p>{props.children}</p>
        </div>
    
    )
}

export default Person;