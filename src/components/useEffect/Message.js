import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [ coords, setCoords ] = useState( { x:0, y: 0 } );
    const { x, y } = coords;

    useEffect(() => {

        const mouseMove = ( e ) =>{
            const coords = { x: e.x, y: e.y };
            setCoords( coords );
        }
        
        window.addEventListener('mousemove', mouseMove );

        return () => {
            window.removeEventListener('mousemove', mouseMove );
        }
    }, [])

    return (
        <div>
            <h1>Here are the coordinates of your mouse pointer:</h1>
            <h4>x:{ x } ------ y: { y }</h4>
        </div>
    );

};
