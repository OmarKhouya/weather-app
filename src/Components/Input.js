import React from 'react'

export default function Input({City,setCity}) {
    return (
        <div className=''>
            <input type="text" className='form-control' value={City} placeholder='City..' onChange={event=>setCity(event.target.value)}/>
        </div>
    )
}
