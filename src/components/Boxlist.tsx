import React from 'react'
import Smallbox from './Smallbox'







function Boxlist(props:boxlist) {
    let result: Array<JSX.Element> = []

    for(let b of props.list) {
        result.push( <Smallbox key={b.id} title={b.title} content={b.content} > </Smallbox> );
    }


    return (
        <div>
            {result}
        </div>    
    );
}

export default Boxlist