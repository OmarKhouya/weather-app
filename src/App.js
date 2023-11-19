import { useEffect, useState } from "react";
import Display from "./Components/Display";
import Input from "./Components/Input";
import axios from "axios";

export default function App() {
    const [City,setCity] = useState()
    const [Data,setData] = useState()
    const [Err,setErr] = useState()

    useEffect(()=>{
        const getData = () => {
            axios(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=1f4f6dc927578529e5b24d4e8ccec4da`)
            .then(res=>setData(res.data)).catch(err=> {})
            console.log(Data)
        }
        getData()
    },[City])

    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            <div className="border rounded p-3 mx-3">
                <Input City={City} setCity={setCity} err={Err}/>
                <hr />
                <Display Data={Data}/>
            </div>
        </div>
    )
}
