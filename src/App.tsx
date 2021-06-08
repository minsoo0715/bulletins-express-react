import React, { useState, useEffect } from "react";
import Boxlist from "./components/Boxlist"
import Btn from "./components/Btn";
import Inputbox from "./components/Inputbox";
import Text from './asset/file/text.txt'
import Json from './asset/file/object.json'
import reactLogo from './asset/img/reactlogo.png'
import InputPage from './Pages/InputPage'
import IndexPage from './Pages/IndexPage'



export function App() {
    const [bulletin_list, Setbulletin] = useState<Array<box>>([])
    const [isChanged, SetisChanged] = useState<boolean>(true)
    const [mode, Setmode] = useState<number>(0)

    useEffect(() => {
        if (isChanged || mode == 0) {
            loadData()
        }
        SetisChanged(false)
    })

    const loadData = async () => {
        console.log('GET')
        const response = await fetch('http://localhost:8000/bulletins');
        const _data = await response.json()
        Setbulletin(_data.data)
        return
    }

    function GetMain() {


        switch (mode) {
            case 0:
                const clickAction: Function = () => Setmode(1)
                return (
                    <IndexPage list={bulletin_list} event={clickAction}></IndexPage>
                )
            case 1:
                const submitAction: Function = (_title: string, _content: string) => {
                    const newBox: box = { title: _title, content: _content, id: bulletin_list.length }
                    let newList: Array<box> = Array.from(bulletin_list);
                    fetch('http://localhost:8000/bulletins', {
                        method: 'POST',
                        body: JSON.stringify(newBox),
                        mode: 'cors',
                        headers: {
                            "Content-Type": "application/json"
                        },

                    })

                    newList.push(newBox)
                    Setbulletin(newList)
                    Setmode(0)
                }

                return (<InputPage onSubmit={submitAction}></InputPage>)
            case 2:



                break;
        }
    }






    return (
        <div id="frame">
            {
                GetMain()
            }
            {
                <img src={reactLogo}></img>
            }

        </div>
    )

}




