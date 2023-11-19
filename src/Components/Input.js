import React from 'react'

export default function Input({City,setCity,err}) {
    return (
        <div className=''>
            <input type="text" className='form-control' value={City} placeholder='City..' onChange={event=>setCity(event.target.value)}/>
            <p className='text-danger'>{err === 404 ? "Not Found" : ""}</p>
        </div>
    )
}
