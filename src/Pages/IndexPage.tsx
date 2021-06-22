import React from 'react'
import Boxlist from '../components/Boxlist'
import Btn from '../components/Btn'

function IndexPage(props: IndexPage_props) {
    return (
    <div>
        { <Boxlist list={props.list} refresh={props.refresh}></Boxlist>}
        { <Btn text="추가하기" event={props.event}></Btn>}
    </div>
    )
}

export default IndexPage