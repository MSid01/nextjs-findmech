import React from "react";
import Image from "next/dist/client/image";
import client from "../../apollo-client/apollo-client";
import { GET_STORE_PRODUCTS } from "../../apollo-client/graphqlFunctions";

const GetGarageProducts = ({ loading, data }) => {
  if (loading) return <div>Loading..</div>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-4  gap-3 p-4">
      {data.map((garage) => {
        return garage.attributes.products.map((product) => {
          const product_thumbnail_url =
            product.product_image.data.attributes.formats.small.url;
          return (
            <div
              className="flex bg-[#fbfaf9] rounded-md p-2 flex-col drop-shadow-lg"
              key={product.id}
            >
              <div className="w-full self-center h-56 relative drop-shadow-md">
                <Image
                  className="rounded"
                  src={product_thumbnail_url}
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
        });
      })}
    </div>
  );
};

export default GetGarageProducts;

export async function getServerSideProps(context) {
  const { data, loading, error } = await client.query({
    query: GET_STORE_PRODUCTS,
  });
  return {
    props: {
      loading,
      data: data.garages.data,
    },
  };
}
