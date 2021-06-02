import React, {useState, useEffect} from "react";
import Boxlist from "./components/Boxlist"
import Btn from "./components/Btn";
import Inputbox from "./components/Inputbox";
import Text from './asset/file/text.txt'
import Json from './asset/file/object.json'
import reactLogo from './asset/img/reactlogo.png'



export function App() {
    const [bulletin_list, Setbulletin] = useState([])
    const [isChanged, SetisChanged] = useState(true)
    const [mode, Setmode] = useState(0) 

    let loadData = async () => {
        let response = await fetch('http://localhost:8000/bulletins');
        let _data = await response.json()
        Setbulletin(_data.data)
        SetisChanged(false)
        return
    }

    useEffect( () => {
        if(isChanged) {
            loadData()
        }
        SetisChanged(false)
    })

    

    function GetMain() {

        if(mode == 1) {
            return (
                
                <Inputbox onSubmit={function(_title:string, _content:string) {
                    let newBox:box = {title: _title, content: _content}
                    let newList:Array<box> = Array.from(bulletin_list);
                    console.log(newBox, JSON.stringify(newBox))
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
                    
                    
                }}
                 ></Inputbox>
    
            )
        }else if(mode == 0) {
            return (
            <Btn text="추가하기" event={
                () => {
                    Setmode(1)
                }
            }></Btn>
            )
        }
    }

   
    return(
        <div>
            <Boxlist list={bulletin_list}></Boxlist>

            {
                GetMain()
            }
            {
                <img src={reactLogo}></img>
            }

        </div>
    )

}


