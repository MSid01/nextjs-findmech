import React from "react";
import GarageRating from "../GarageRating";

function Garage_background_img({ props }) {
  const attributes = props;

  const large_img_url = attributes.garage_image.data.attributes.formats.large;
  const original_img_url = attributes.garage_image.data.attributes.url;
  var img_url = "";
  if (large_img_url) img_url = large_img_url.url;
  else img_url = original_img_url;

  const { street, city, landmark, district, state, postal_code } =
    attributes.address;

    var total_rating = parseInt(attributes.garage_rating);
    var number_of_visitors = parseInt(attributes.number_of_visitors);
  
    var garage_rating = (total_rating/number_of_visitors).toFixed(1);
    const rating_array = [1,2,3,4,5];
    var rounded_rating = parseInt(garage_rating);
  return (
    <div
      className="w-full h-96 mb-1"
      style={{
        backgroundImage: `linear-gradient(rgb(11 10 10), rgb(255 255 255 / 0%)), url(${img_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="pl-4 pt-2">
        <h2 className="font-bold text-2xl text-white">
          {attributes.garage_name}
        </h2>
        <ul className="flex">
        {rating_array.map( ele=>{
        if(ele<=rounded_rating)
        return <li key = {ele}>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  </li>
  else return <li key = {ele}>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
        })}
        </ul>
        <div className="flex items-top">
          <div className="pt-2 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="white"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
          <div>
            <span className="text-white font-mono pt-1 flow-root">
              {`${street}, ${landmark},`}
            </span>
            <span className="text-white font-mono pt-1 block">
              {`${city}, ${district}, ${state}-${postal_code}`}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pt-1 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </div>
          <span className="font-semibold text-white font-mono pt-1">
            <a href={`tel:${attributes.garage_phn_num}`}>
              {attributes.garage_phn_num}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Garage_background_img;
