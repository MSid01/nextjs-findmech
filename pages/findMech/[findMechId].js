import React from "react";
import Image from "next/image";
import Timetable from "../../components/findMechId/GarageTimeTable";
import Garage_background_img from "../../components/findMechId/GarageBackgroundImg";
import ContactUs from "../../components/findMechId/GarageContactUs";
import GarageServices from "../../components/findMechId/GarageServices";
// import Link from "next/link";
function GarageDetails({ garage, average_rating }) {
  const { attributes } = garage.data;

  return (
    <div className="flex flex-col m-1 md:flex-row gap-1.5">
      <div className="flex-[5] md:flex-[8] lg:flex-[7]">
        {/* image background div */}
       <Garage_background_img props={attributes}/>
        <div className="grid sm:grid-cols-2 gap-2 my-1">
          <Timetable timetable={attributes.timetable} />
          <ContactUs attributes={attributes}/>
        </div>
          <GarageServices/>
        {/* product 2 sm-3 md-1 lg-2 */}
       
      </div>
      <div className="flex-[4] bg-gray-100">
        <h2 className="font-bold text-2xl pl-4 pt-2 pb-4">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 md:gap-x-2 md:mx-1 lg:grid-cols-2 lg:gap-x-2 lg:mx-2 gap-x-5 gap-y-2 mx-3">
          {attributes.products.map((product) => {
            console.log(product)
            return (
              <div className="flex bg-[#fbfaf9] rounded-md p-2 flex-col drop-shadow-lg" key={product.id}>
                <div className="w-full self-center h-56 relative drop-shadow-md">
                  <Image
                    className="rounded"
                    src={`https://res.cloudinary.com/sidster/image/upload/v1647282591/recha_oktaviani_t_61ap00_Mc_unsplash_1_a2b129ee79.jpg`}
                    alt={product.product_name}
                    layout="fill"
                    quality={25}
                    priority
                    objectFit="cover"
                  />
                </div>
                {/* product details */}
                <div className="flex flex-col p-1 rounded-sm mt-2">
                  <h2 className="font-bold" >{product.product_name}</h2>
                  <h5 className="self-end font-medium text-gray-600 line tracking-wider">₹{product.product_price}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GarageDetails;

export async function getServerSideProps(context) {
  const { findMechId } = context.query;
  const response = await fetch(
    `https://nearmech-backend.herokuapp.com/api/garages/${findMechId}?populate=*`
    );
    const garage = await response.json();
    const average_rating_response = await fetch(
      `https://nearmech-backend.herokuapp.com/api/garages/${findMechId}/avgRating`
  )
    const average_rating = await average_rating_response.json();
  return {
    props: {
      garage,
      average_rating
    },
  };
}
