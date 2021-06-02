import React, {CSSProperties} from 'react'



const boxStyle:CSSProperties= {
    border:"1px solid black"
}

function Smallbox(props:smallbox_props) {
    return (
        <div style={boxStyle}>
            <p> 제목 : {props.title}</p>
            <p> 내용 : {props.content}</p>
        </div>
    )
}

export default Smallbox