import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => console.log('hey!'), [] );
    useEffect( () => console.log('The formState has been changed'), [ formState ] );
    useEffect( () => console.log('The email has been changed'), [ email ] );

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your name or Type Juan and a secret message will appear!" autoComplete="off" value={ name } onChange={ handleInputChange }/>
            </div>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="email@gmail.com" autoComplete="off" value={ email } onChange={ handleInputChange }/>
            </div>
            { (name === 'Juan') && <Message /> }
        </>
    );

};
