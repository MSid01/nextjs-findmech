import React from "react";

function GarageServices() {
    const servicesArr = [
        "puncture",
        "windshield repair",
        "petrol",
        "engine oil",
        "tyre change",
        "puncture",
        "windshield repair",
        "petrol",
        "engine oil",
        "tyre change",
        "puncture",
        "windshield repair",
        "petrol",
        "engine oil",
        "tyre change",
        "puncture",
        "windshield repair",
        "petrol",
        "engine oil",
        "tyre change",
      ];
  return (
    <div className="rounded-sm shadow-md py-2 px-4 my-1">
      <h3 className="font-bold text-lg">Services</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-2 garage-service-grid">
        {servicesArr.map((service, index) => (
          <div key={index}>{service}</div>
        ))}
      </div>
    </div>
  );
}

export default GarageServices;
