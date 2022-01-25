import React from 'react';
// import Link from "next/link";
function GarageDetails({garage}) {
    const {attributes} = garage.data;
    console.log(attributes);
  return <div>
          <h1>{attributes.garage_name}</h1>
          <h2>{attributes.garage_rating}</h2>
          <h4>{attributes.towing_available ? "Yes" : "No"}</h4>
          <p>{attributes.garage_phn_num}</p>
  </div>;
}

export default GarageDetails;

export async function getServerSideProps(context){
    const {garageid} = context.query;
    const response = await fetch(`http://localhost:1337/api/garages/${garageid}`);
    const garage = await response.json();
    return {
      props: {
        garage,
      },
    };
}
