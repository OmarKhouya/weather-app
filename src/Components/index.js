import { useEffect, useState } from "react";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";

export default function MainComp() {
    const [City,setCity] = useState('')
    const [Data,setData] = useState()

    const getData =async () => {
        try {
            const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=1f4f6dc927578529e5b24d4e8ccec4da`)
            setData(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect(()=>{
        getData()
    },[City])

    return (
        <div>
            <div className="rounded p-3 mx-3 shadow-lg" style={{backgroundColor: "#89CFF3",width: "40rem"}}>
                <Input City={City} setCity={setCity}/>
                <hr />
                <Display Data={Data}/>
            </div>
        </div>
    )
}
