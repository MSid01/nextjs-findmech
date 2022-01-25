import Link from "next/link";
import React from "react";

function GarageList({ garages }) {
  return (
    <div>
      {garages.data.map(({ attributes, id }) => (
        <div key={id}>
          <h1>{attributes.garage_name}</h1>
          <h2>{attributes.garage_rating}</h2>
          <h4>{attributes.towing_available ? "Yes" : "No"}</h4>
          <p>{attributes.garage_phn_num}</p>
          <Link href={`/garages/${id}`} passHref>
            <a>Learn more</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GarageList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:1337/api/garages?populate=*");
  const garages = await response.json();
  return {
    props: {
      garages,
    },
  };
}
