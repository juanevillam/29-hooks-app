import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ] );

    
    useEffect( () => {
        // ???
    }, [ increment ] )


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
