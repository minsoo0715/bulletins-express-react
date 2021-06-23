import React, { useState } from 'react'

function Inputbox(props : inputbox_props) {
    const [isLoaded, SetisLoaded] = useState<boolean>(false);
    if(isLoaded) {
        return (
            <div className="loader"></div>
        )   
    }
    return (

        
        <div>
            <form action="/createOne" method="POST" onSubmit={ function(e) {
                e.preventDefault()
                props.onSubmit(e.target.title.value, e.target.content.value, SetisLoaded)
                
                e.target.reset()
            }}>
                <div> <input type="text" name="title" id="title" placeholder="제목"></input></div>
                <div id="content"> <textarea name="content" placeholder="내용" id="content" rows={20}cols={200}></textarea></div>
                <div> <input type="submit" value="글 쓰기" id="bulletin_submit"></input></div>
            </form>
        </div>
    )
}

export default Inputbox