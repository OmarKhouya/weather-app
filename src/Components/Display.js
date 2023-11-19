
export default function Display({Data}) {
    return (
        <div>
            {
                Data && (
                    <>
                        <p> {Data.main.temp- 273.15}</p>
                    </>
                )
            }
        </div>
    )
}
