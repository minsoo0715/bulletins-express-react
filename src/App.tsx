import React, { useState, useEffect } from "react";
import Boxlist from "./components/Boxlist"
import Btn from "./components/Btn";
import Inputbox from "./components/Inputbox";
import Text from './asset/file/text.txt'
import apiUrl from './asset/file/apiUrl.txt'
import Json from './asset/file/object.json'
import reactLogo from './asset/img/reactlogo.png'
import InputPage from './Pages/InputPage'
import IndexPage from './Pages/IndexPage'
import ViewPage from "./Pages/ViewPage";



export function App() {
    const [bulletin_list, Setbulletin] = useState<Array<box>>([])
    const [isChanged, SetisChanged] = useState<boolean>(true)
    const [mode, Setmode] = useState<number>(0)
    const [latest_id, SetfinalId] = useState<number>();
    const [selectBox, SetselectBox] = useState<box>();

    useEffect(() => {
        if (isChanged) {
            loadData()
        }
        SetisChanged(false)
    })

    const loadData = async () => {
        console.log('GET')
        const response = await fetch(apiUrl + '/bulletins', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
            }
        );
        console.log(response);

        const _data = await response.json()
        Setbulletin(_data.data)
        return
    }

    function GetMain() {


        switch (mode) {
            case 0:
                const clickAction: Function = () => Setmode(1)
                const selectAction: Function = (boxId:number) => { 
                    SetselectBox(bulletin_list[boxId - bulletin_list[0].id]);
                    Setmode(2);
                }

                return (
                    <IndexPage refresh={() => {
                        SetisChanged(true)
                    }} list={bulletin_list} event={clickAction} selectEvent={selectAction}></IndexPage>
                )
            case 1:
                const submitAction: Function = async (_title: string, _content: string, loading: Function) => {
                    loading(true);
                    let res = await fetch(apiUrl + '/bulletins', {
                        method: 'POST',
                        body: JSON.stringify({title: _title, content: _content}),
                        mode: 'cors',
                        headers: {
                            "Content-Type": "application/json"
                        },

                    })
                    console.log('res', res);
                    const _data = await res.json()

                    const newBox: box = { title: _title, content: _content, id: _data.id}
                    let newList: Array<box> = Array.from(bulletin_list);
                    newList.push(newBox)
                    Setbulletin(newList)
                    loading(false);         
                    Setmode(0)

                }

                return (<InputPage onSubmit={submitAction}></InputPage>)
            case 2:
                return (<ViewPage data={selectBox} back={() => {
                    Setmode(0)
                }}></ViewPage> )
                
        }
    }






    return (
        <div id="frame">
             {  
                <img src={reactLogo} id={"logo"}></img>
                
            }
            {
                GetMain()
            }
           

        </div>
    )

}




