
export default function Display({Data}) {

    return (
        <div className="">
            {Data && (
                <div className="d-flex justify-content-center">
                    <div className="w-100">
                        <div className="d-flex justify-content-between rounded px-2" style={{backgroundColor: "#A0E9FF"}} >
                            <img src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}.png`} alt="icon" />
                            <p className="my-auto text-end">{Math.floor(Data.main.temp - 273.15)} ºC</p>
                        </div>
                        <div className="text-center rounded p-2 mt-1 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: "#CDF5FD"}} >
                            <p className="my-auto">{Data.weather[0].main}</p>
                            <p className="my-auto"><span className="fw-lighter">Humidity </span><span className="fw-bold">{Data.main.humidity} %</span></p>
                        </div>
                    </div>
                    <div className="ms-1 rounded p-2 w-100 text-center d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: "#E0F4FF"}}>
                        <p className="my-auto">{Data.weather[0].description}</p>
                        <p className="my-auto">wind <span className="fw-bold">{Math.floor(Data.wind.speed * 3.6)} km/h</span></p>
                        <p className="my-auto">clouds <span className="fw-bold">{Data.clouds.all} % </span></p>
                    </div>
                </div>
            )}
        </div>
    )
}
