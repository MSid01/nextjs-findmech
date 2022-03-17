import React,{useEffect, useState} from "react";
import GarageRating from "../GarageRating";

function GarageBackgroundImg({ attributes }) {
  const garage_thumbnail_img_url = attributes.garage_image.data.attributes.formats.thumbnail.url;
  const garage_large_img_url = attributes.garage_image.data.attributes.formats.large.url;
  
  const { street, city, landmark, district, state, postal_code } =
    attributes.address;

  var total_rating = parseInt(attributes.garage_rating);
  var number_of_visitors = parseInt(attributes.number_of_visitors);
  return (
    <div
      className="w-full h-96 mb-1"
      style={{
        backgroundImage: `linear-gradient(rgb(11 10 10), rgb(255 255 255 / 0%)), url(${garage_large_img_url ? garage_large_img_url : garage_thumbnail_img_url })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="pl-4 pt-2">
        <h2 className="font-bold text-2xl text-white">
          {attributes.garage_name}
        </h2>
       <GarageRating total_rating={total_rating} number_of_visitors={number_of_visitors}/>
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

export default GarageBackgroundImg;
