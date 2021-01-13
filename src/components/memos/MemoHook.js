import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {

    const { counter, increment } =  useCounter( 15 );
    const [ show, setShow ] = useState(true);
    
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small>  </h3>
            <hr />

            <p> { memoHeavyProcess } </p>

            <button className="btn btn-info" onClick={ increment }>+1</button>

            <button className="btn btn-outline-info ml-3" onClick={ () => setShow( !show ) }>
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    );

}
