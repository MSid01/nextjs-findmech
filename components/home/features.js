import React from 'react';

function Features() {
  return <div className="flex sm:flex flex-wrap justify-center items-center text-center gap-9 bg-gray-700 p-5 sm:py-16 pb-16">
  <div className="w-3/4 mt-6 sm:w-1/4 px-4 py-4 md:mt-0 bg-white shadow-lg rounded-lg">
    <div className="flex-shrink-0">
      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      </div>
    </div>
    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
      User Friendly
    </h3>
    <p className="text-md  text-gray-500 py-4">
      Easy to access platform for everyone.
    </p>
  </div>
  <div className="w-3/4 mt-6 sm:w-1/4 px-4 py-4 md:mt-12 bg-white shadow-lg rounded-lg">
    <div className="flex-shrink-0">
      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-clock-history"
          viewBox="0 0 16 16"
        >
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      </div>
    </div>
    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
      Instant Service
    </h3>
    <p className="text-md text-gray-500 py-4">
      Providing Reliable service 24???7`.
    </p>
  </div>
  <div className="w-3/4 mt-6 sm:w-1/4 px-4 py-4 md:mt-0 bg-white shadow-lg rounded-lg">
    <div className="flex-shrink-0">
      <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      </div>
    </div>
    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
      Efficient Locator
    </h3>
    <p className="text-md  text-gray-500 py-4">
      Finds any nearby mechanic available.
    </p>
  </div>
</div>;
}

export default Features;
