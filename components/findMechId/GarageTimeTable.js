const Timetable = ({ timetable }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const table_body_data_class="text-gray-200 font-medium px-6 py-1 whitespace-nowrap"
  const currentday = new Date().getDay();
  return (
      <div className="rounded-sm shadow-md ring-opacity-5 py-2 px-4">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-500">
            <th className="text-left font-bold text-white px-6 py-2">Day</th>
            <th className="text-left font-bold text-white px-6 py-2">From</th>
            <th className="text-left font-bold text-white px-6 py-2">Day</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map(({ start, end }, index) => (
            <tr key={index}  className={ (currentday===index) ? "bg-gray-600":"bg-white border-b"}>
              <td className={(currentday===index) ?table_body_data_class :"text-gray-900 font-light px-6 py-1 whitespace-nowrap"}>{weekdays[index]}</td>
              <td  className={(currentday===index) ?table_body_data_class :"text-gray-900 font-light px-6 py-1 whitespace-nowrap"}>{start.slice(0, 5)}</td>
              <td  className={(currentday===index) ?table_body_data_class :"text-gray-900 font-light px-6 py-1 whitespace-nowrap"}>{end.slice(0, 5)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default Timetable;
