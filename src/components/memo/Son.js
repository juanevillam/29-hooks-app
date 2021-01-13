import React from 'react'

export const Son = React.memo(({ number, increment }) => {
    return (
        <button className="btn btn-info mr-3" onClick={ () => increment( number ) }>
            { number }
        </button>
    );
});
