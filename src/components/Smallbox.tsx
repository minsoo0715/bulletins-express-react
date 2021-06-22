import React, {CSSProperties} from 'react'
import Btn from './Btn'





function Smallbox(props:smallbox_props) {
    return (
                <tr>
                    <td>1</td>
                    <td>{props.title}</td>
                    <td>{props.content}</td>
                    <td> <Btn text="삭제" event={props.delete}></Btn> </td>
                </tr>  
    )
}

export default Smallbox