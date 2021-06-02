import React from 'react'

function Inputbox(props : inputbox_props) {
    return (
        <div>
            <form action="/createOne" method="POST" onSubmit={ function(e) {
                e.preventDefault()
                props.onSubmit(e.target.title.value, e.target.content.value)
                
                e.target.reset()
            }}>
                <p> <input type="text" name="title" placeholder="제목"></input></p>
                <p> <input type="textarea" name="content" placeholder="내용"></input></p>
                <p> <input type="submit" value="완료"></input></p>
            </form>
        </div>
    )
}

export default Inputbox