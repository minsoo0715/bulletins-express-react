import React, {MouseEventHandler, useState} from 'react'

interface Btn_Props {
    text:string,
    event:Function
}

export default function Btn(props:Btn_Props) {
    return (
        <p><input type="button" value={props.text} onClick={function(e) {
            e.preventDefault()
            props.event()
        }}></input>   </p>
    )
}