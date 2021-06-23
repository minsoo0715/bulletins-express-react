import React, {CSSProperties, useEffect, useState} from 'react'
import Inputbox from '../components/Inputbox'
import apiUrl from '../asset/file/apiUrl.txt'
import Btn from '../components/Btn'



function ViewPage(props : viewPage_props) {
    return (
      <div id="ViewRoot">
          { <div id="title" className="view">{props.data.title}</div> }
          {<div id="content" className="view">{props.data.content}</div> }
          {<p >
            <Btn text={"뒤로"}  event={props.back}></Btn> 
            <Btn text={"수정"} event={() => alert('수정 클릭')}></Btn>
            </p>}
          
      </div>
    )
}

export default ViewPage