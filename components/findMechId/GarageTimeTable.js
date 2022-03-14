const Timetable = ({timetable})=>{
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentday = new Date().getDay();
    return(
        <div className="rounded-sm shadow-md ring-opacity-5 py-2 px-3">
            {
                timetable.map(({start, end},index)=>{
                    return(
                        <div className={(index===currentday)?"flex px-1 gap-1.5 bg-gray-800 font-bold text-white rounded-md":"flex px-1 gap-1.5"} key={index}>
                            <span className="w-24">{weekdays[index]}</span>
                            <span className="">{start.slice(0,5)}</span>
                            <span className="">-</span>
                            <span className="">{end.slice(0,5)}</span>
                        </div>)
                })
            }
        </div>
    )
}

export default Timetable;