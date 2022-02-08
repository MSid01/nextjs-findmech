const Timetable = ({timetable})=>{
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentday = new Date().getDay();
    return(
        <>
            {
                timetable.map(({start, end},index)=>{
                    return(
                        <div className={(index===currentday)?"flex sm:p-1 p-0.5 gap-1.5 bg-red-400 font-bold w-64 text-white rounded-lg":"flex p-0.5 sm:p-1 gap-1.5"} key={index}>
                            <span className="w-24">{weekdays[index]}</span>
                            <span className="">{start.slice(0,5)}</span>
                            <span className="">TO</span>
                            <span className="">{end.slice(0,5)}</span>
                        </div>)
                })
            }
        </>
    )
}

export default Timetable;