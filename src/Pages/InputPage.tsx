import React, {useState} from 'react'
import Inputbox from '../components/Inputbox'

function InputPage(props : inputbox_props) {

    

    return (
        <div>
            <Inputbox onSubmit={props.onSubmit} ></Inputbox>
        </div>
    )
}

export default InputPage