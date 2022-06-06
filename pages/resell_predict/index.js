import React, { useState, useEffect } from "react";

function CarPricePredictor({
  companies,
  car_models,
  year,
  fuel_type,
  seller_type,
  transmission_type,
}) {
  const [predicted_price, setPredicted_price] = useState("");
  const [formData, setFormData] = useState({
    car_model: car_models[0],
    companies: companies[0],
    year: year[0],
    fuel_type: fuel_type[0],
    seller_type: seller_type[0],
    transmission_type: transmission_type[0],
    kilos_driven: 0,
    mileage: 0,
    engine: 0,
    max_power: 0,
    seats: 0,
  });

  async function fetchData() {
    await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredicted_price(data.result.toFixed(2));
      });
  }

  return (
    <div className="h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold p-2">
          Welcome to car Price Predictor
        </h1>
        <h2 className="text-xl font-semibold p-2">
          Predicted Price:{" "}
          {predicted_price === "" ? "" : `₹ ${predicted_price}`}
        </h2>
        <form
          method="post"
          action="http://127.0.0.1:5000/predict"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="company"
            onChange={(e) => {
              // setcurrCompany(e.target.value);
              setFormData({
                ...formData,
                companies: e.target.value,
              });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Car Company
            </option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="car_model"
            onChange={(e) => {
              setFormData({ ...formData, car_model: e.target.value });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Car model
            </option>
            {car_models
              .filter(
                (car_model) => car_model.split(" ")[0] === formData.companies
              )
              .map((car_model) => (
                <option key={car_model} value={car_model}>
                  {car_model}
                </option>
              ))}
          </select>
          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="year"
            onChange={(e) => {
              setFormData({ ...formData, year: e.target.value });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Year
            </option>
            {year.map((car_year) => (
              <option key={car_year} value={car_year}>
                {car_year}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="fuel_type"
            onChange={(e) => {
              setFormData({ ...formData, fuel_type: e.target.value });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Fuel Type
            </option>
            {fuel_type.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="seller_type"
            onChange={(e) => {
              setFormData({ ...formData, seller_type: e.target.value });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Seller Type
            </option>
            {seller_type.map((seller) => (
              <option key={seller} value={seller}>
                {seller}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-400 rounded-md p-2 m-2"
            defaultValue={"DEFAULT"}
            name="transmission_type"
            onChange={(e) => {
              setFormData({ ...formData, transmission_type: e.target.value });
            }}
          >
            <option value="DEFAULT" disabled>
              Select Transmission Type
            </option>
            {transmission_type.map((transmission) => (
              <option key={transmission} value={transmission}>
                {transmission}
              </option>
            ))}
          </select>

          <div className="flex flex-col">
            <label className="ml-2 font-semibold">Kms driven</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 m-2 "
              type="number"
              name="kilos_driven"
              placeholder="Enter Kms Driven"
              value={formData.kilos_driven === 0 ? "" : formData.kilos_driven}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  kilos_driven:
                    e.target.value !== "" && parseInt(e.target.value),
                });
              }}
            />
          </div>

          <div className="flex flex-col">
            <label className="ml-2 font-semibold">mileage</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 m-2 "
              type="number"
              // step="0.01"
              name="mileage"
              value={formData.mileage === 0 ? "" : formData.mileage}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  mileage: e.target.value !== "" && parseInt(e.target.value),
                });
              }}
              placeholder="Enter Mileage(in Kmpl)"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 font-semibold">engine(cc)</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 m-2 "
              type="number"
              name="engine"
              value={formData.engine === 0 ? "" : formData.engine}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  engine: e.target.value !== "" && parseInt(e.target.value),
                });
              }}
              placeholder="Enter Engine Capacity(in cc)"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 font-semibold">Max power(bhp)</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 m-2 "
              type="number"
              // step="0.01"
              name="max_power"
              value={formData.max_power === 0 ? "" : formData.max_power}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  max_power: e.target.value !== "" && parseInt(e.target.value),
                });
              }}
              placeholder="Enter Max Power(in bhp)"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 font-semibold">No. of seats</label>
            <input
              className="border-2 border-gray-500 rounded-md px-1 m-2 "
              type="number"
              name="seats"
              value={formData.seats === 0 ? "" : formData.seats}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  seats: e.target.value !== "" && parseInt(e.target.value),
                });
              }}
              placeholder="Enter Numbers of Seats"
            />
          </div>
        </form>
        <button
          className="border border-gray-400 p-2 m-2 rounded-md bg-red-400 hover:bg-red-600"
          onClick={(e) => {
            e.preventDefault();
            fetchData();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CarPricePredictor;

export async function getServerSideProps(context) {
  const {
    companies,
    car_models,
    year,
    fuel_type,
    seller_type,
    transmission_type,
  } = await fetch(`http://127.0.0.1:5000/`).then((res) => res.json());
  return {
    props: {
      companies,
      car_models,
      year,
      fuel_type,
      seller_type,
      transmission_type,
    },
  };
}
