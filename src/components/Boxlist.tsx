import React, { CSSProperties } from 'react'
import { Table } from 'react-bootstrap';
import Smallbox from './Smallbox'
import apiUrl from '../asset/file/apiUrl.txt'







function Boxlist(props:boxlist) {

    const whenClick:Function = (box_id:number) => {
        props.select(box_id)
    }

    let result: Array<JSX.Element> = []

    for(let b of props.list) {
        result.push( <Smallbox key={b.id} delete={
        async () => {
             await fetch(apiUrl + '/bulletins', {
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
        }} title={b.title} content={b.content} id={b.id} onClick={whenClick}> </Smallbox> );
        
        
    }

    
    return (
        
        <Table striped bordered hover size="sm" id="list">
            <thead>
                <tr>
                    <th id="num">#</th>
                    <th id="tt">제목</th>
                    <th id="cc">내용</th>
                    <th id="dd">삭제</th>
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