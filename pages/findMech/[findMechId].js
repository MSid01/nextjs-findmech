import React from "react";
import Image from "next/image";
import Timetable from "../../components/findMechId/GarageTimeTable";
import GarageBackgroundImg from "../../components/findMechId/GarageBackgroundImg";
import ContactUs from "../../components/findMechId/GarageContactUs";
import GarageServices from "../../components/findMechId/GarageServices";
import client from "../../apollo-client/apollo-client";
import { GET_GARAGE_INITIAL_DATA_BY_ID } from "../../apollo-client/graphqlFunctions";
// import Link from "next/link";
function GarageDetails({ garage }) {
  const { attributes } = garage.data;

  return (
    <div className="flex flex-col m-1 md:flex-row gap-1.5">
      <div className="flex-[5] md:flex-[8] lg:flex-[7]">
        {/* image background div */}
        <GarageBackgroundImg attributes={attributes} />
        <div className="grid sm:grid-cols-2 gap-2 my-1">
          <Timetable timetable={attributes.timetable} />
          <ContactUs attributes={attributes} />
        </div>
        <GarageServices />
        {/* product 2 sm-3 md-1 lg-2 */}
      </div>
      <div className="flex-[4] flex flex-col bg-gray-100">
        <h2 className="font-bold text-2xl pl-4 pt-2 pb-4">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 md:gap-x-2 md:mx-1 lg:grid-cols-2 lg:gap-x-2 lg:mx-2 gap-x-5 gap-y-2 mx-3">
          {attributes.products.map((product) => {
            const product_small_img_url = product.product_image.data.attributes.formats.small.url
            const product_thumbnail_url = product.product_image.data.attributes.formats.thumbnail.url;
            return (
              <div
                className="flex bg-[#fbfaf9] rounded-md p-2 flex-col drop-shadow-lg"
                key={product.id}
              >
                <div className="w-full self-center h-56 relative drop-shadow-md">
                  <Image
                    className="rounded"
                    src={product_small_img_url ?product_small_img_url: product_thumbnail_url}
                    alt={product.product_name}
                    layout="fill"
                    quality={25}
                    priority
                    objectFit="cover"
                  />
                </div>
                {/* product details */}
                <div className="flex flex-col p-1 rounded-sm mt-2">
                  <h2 className="font-bold">{product.product_name}</h2>
                  <h5 className="self-end font-medium text-gray-600 line tracking-wider">
                    ₹{product.product_price}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-2 mt-4"></div>
        <div className="self-end p-2">
        <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-900 rounded">
          See more
        </button>
        </div>
      </div>
    </div>
  );
}

export default GarageDetails;

export async function getServerSideProps(context) {
  const { findMechId } = context.query;
  const {data, loading} = await client.query({query:GET_GARAGE_INITIAL_DATA_BY_ID, variables:{garageId:findMechId}});
  return {
    props: {
      garage:data.garage,
      loading
    },
  };
}
