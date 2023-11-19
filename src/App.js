import { useEffect, useState } from "react";
import Display from "./Components/Display";
import Input from "./Components/Input";
import axios from "axios";

export default function App() {
    const [City,setCity] = useState('')
    const [Data,setData] = useState()

    useEffect(()=>{
        const getData = () => {
            axios(`https://api.openweathermap.org/data/2.5/weather?q=${"Safi"}&appid=1f4f6dc927578529e5b24d4e8ccec4da`)
            .then(res=>setData(res.data))
            .catch(err=> {})
        }
        getData()
    },[City])

    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh",backgroundColor: "#00A9FF"}}>
            <div className="rounded p-3 mx-3 shadow-lg" style={{backgroundColor: "#89CFF3",width: "25rem"}}>
                <Input City={City} setCity={setCity}/>
                <hr />
                <Display Data={Data}/>
            </div>
        </div>
    )
}
