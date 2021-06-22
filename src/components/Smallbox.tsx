import React, {CSSProperties} from 'react'
import Btn from './Btn'



const boxStyle:CSSProperties= {
    border:"1px solid black"
}

function Smallbox(props:smallbox_props) {
    return (
        <div style={boxStyle}>
            <p> 제목 : {props.title}</p>
            <p> 내용 : {props.content}</p>
            <Btn text="삭제" event={props.delete}></Btn>
        </div>
    )
}

export default Smallbox