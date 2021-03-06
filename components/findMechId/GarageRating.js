const GarageRating = ({total_rating, number_of_visitors})=>{
  var garage_rating = 0;
  if(total_rating!==0) (garage_rating= total_rating / number_of_visitors).toFixed(1);
  const rating_array = [1, 2, 3, 4, 5];
  var rounded_rating = parseInt(garage_rating);
    return(
      <div className="flex items-center gap-1">
          <div className="px-2 rounded-md bg-green-700 text-white font-semibold">{garage_rating}</div>
          <ul className="flex">
            {rating_array.map((ele) => {
              if (ele <= rounded_rating)
                return (
                  <li key={ele}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                );
              else
                return (
                  <li key={ele}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-4 text-yellow-500 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                );
            })}
          </ul>
          <div className="px-2 rounded-md bg-gray-700 text-white font-semibold">{number_of_visitors}</div>
        </div>
            )
}

export default GarageRating;