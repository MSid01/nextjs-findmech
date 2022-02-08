import React from "react";
import Image from "next/image";
import imh from "../../public/close.svg";
import GarageRating from "../../components/GarageRating";
import Timetable from "../../components/TimeTable";
// import Link from "next/link";
function GarageDetails({ garage }) {
  const { attributes } = garage.data;
  const image_URL = attributes.garage_image.data.attributes.formats.large.url;
  console.log(attributes);
  const { street, city, landmark, district, state, postal_code } =
    attributes.address;
  return (
    <div className="flex flex-col m-1 md:flex-row gap-1.5">
      <div className="flex-auto w-full md:w-80">
        {/* image background div */}
        <div
          className="w-full h-96"
          style={{
            backgroundImage: `linear-gradient(rgb(11 10 10), rgb(255 255 255 / 0%)), url(${image_URL})`,
          }}
        >
          <div className="pl-4 pt-2">
            <h2 className="font-bold text-2xl text-white">
              {attributes.garage_name}
            </h2>
            <GarageRating
              props={{
                rating: attributes.garage_rating,
                zIndex: 0,
                garageDetails: true,
              }}
            />
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
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <div className="flex-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2 px-4">
            <h3 className="font-bold">Time Table</h3>
            <Timetable timetable={attributes.timetable} />
          </div>
          <div className="flex-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2 px-4">
            {/* your rating website towing garage owner mail id phone-number */}
            <h3 className="font-bold">Contact us</h3>
              <div className="flex items-center gap-2 sm:p-1 p-0.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span>
                  {attributes.owner_first_name} {attributes.owner_last_name}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:p-1 p-0.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <span className="font-semibold">
                  <a href={`tel:${attributes.garage_phn_num}`}>
                    {attributes.garage_phn_num}
                  </a>
                </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto bg-red-500">col2</div>
    </div>
  );
}

export default GarageDetails;

export async function getServerSideProps(context) {
  const { findMechId } = context.query;
  const response = await fetch(
    `http://localhost:3009/api/garages/${findMechId}?populate=*`
  );
  const garage = await response.json();
  return {
    props: {
      garage,
    },
  };
}
