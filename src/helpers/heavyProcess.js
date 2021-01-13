export const heavyProcess = ( iterations ) => {

    for( let i = 0; i < iterations; i ++ ){
        console.log('There we go...');
    }

    return `${ iterations } iterations performed.`;

};