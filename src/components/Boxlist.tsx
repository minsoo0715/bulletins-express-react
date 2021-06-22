import React, { CSSProperties } from 'react'
import { Table } from 'react-bootstrap';
import Smallbox from './Smallbox'







function Boxlist(props:boxlist) {
    let result: Array<JSX.Element> = []

    for(let b of props.list) {
        result.push( <Smallbox key={b.id} delete={
        async () => {
             await fetch('http://whiteb.p-e.kr/bulletins', {
                        method: 'DELETE',
                        body: JSON.stringify({
                            id: b.id
                        }),
                        mode: 'cors',
                        headers: {
                            "Content-Type": "application/json"
                        },

                    })
                await props.refresh()
        }} title={b.title} content={b.content} > </Smallbox> );
        
        
    }

    
    return (
        
        <Table striped bordered hover size="sm" id="list">
            <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>

        </Table>


        // <div className="test">
        //     {result}
        // </div>    
    );
}

export default Boxlist