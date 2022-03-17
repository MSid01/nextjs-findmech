This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 <div className="flex-[5] md:flex-[8] lg:flex-[7]">
        {/* image background div */}
        <GarageBackgroundImg props={attributes} />
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
            return (
              <div
                className="flex bg-[#fbfaf9] rounded-md p-2 flex-col drop-shadow-lg"
                key={product.id}
              >
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