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
                <p> <input type="text" name="title" id="title" placeholder="제목"></input></p>
                <p> <textarea name="content" placeholder="내용" id="content" rows={50} cols={200}></textarea></p>
                <p> <input type="submit" value="글 쓰기" id="bulletin_submit"></input></p>
            </form>
        </div>
    )
}

export default Inputbox