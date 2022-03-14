import React from "react";
import PropTypes from "prop-types";
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from "react-instantsearch-dom";
import Image from "next/image";
import Link from "next/link";
import GarageRating from "./GarageRating";

const HitComponent = ({ hit }) => {
  
  const d = new Date();
  const day = d.getDay();
  const { start, end } = hit.timetable[parseInt(day)];
  const openingTime = start.split(":").slice(0, 2);
  const closingTime = end.split(":").slice(0, 2);
  const convertTo12 = (time) => {
    let timeinInt = parseInt(time[0]);
    if (timeinInt >= 12 || timeinInt === 0) {
      if (timeinInt === 0) return `12:${time[1]}AM`;
      else if (timeinInt === 12) return `12:${time[1]}PM`;
      else {
        timeinInt = timeinInt - 12;
        return timeinInt < 10
          ? `0${timeinInt.toString()}:${time[1]}PM`
          : `${timeinInt.toString()}:${time[1]}PM`;
      }
    } else {
      return `${time[0]}:${time[1]}AM`;
    }
  };
  const opening = convertTo12(openingTime);
  const closing = convertTo12(closingTime);


  var total_rating = parseInt(hit.garage_rating);
  var number_of_visitors = parseInt(hit.number_of_visitors);

  return (
    <div className="hit sm:flex">
      <div className="w-full relative z-[-1] sm:w-2/5 garage-image">
        <Image
          className="rounded"
          src={`${hit.garage_image.formats.small.url}`}
          alt={hit.garage_image}
          layout="fill"
          quality={50}
          priority
          objectFit="cover"
        />
      </div>
      <div className="hit-content mt-1 px-2 sm:w-3/5 sm:mt-0">
        <div>
          <Highlight
            className="font-semibold garage_name"
            attribute="garage_name"
            hit={hit}
          />
        </div>
        <div className="flex">
          <GarageRating total_rating={total_rating} number_of_visitors={number_of_visitors}/>
        </div>
        <div className="flex">
          <div className="pt-1 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-geo-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
              />
            </svg>
          </div>
          <div className="text-xs address">
            <Highlight attribute="address.street" hit={hit} />
            {", "}
            <Highlight attribute="address.city" hit={hit} />
            {", "}
            <Highlight attribute="address.landmark" hit={hit} />
            {" - "}
            <Highlight attribute="address.district" hit={hit} />
            {", "}
            <Highlight attribute="address.state" hit={hit} />
            {" -"}
            <Highlight attribute="address.postal_code" hit={hit} />
          </div>
        </div>
        <div className="flex">
          <div className="pt-1 pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-truck-flatbed"
              viewBox="0 0 16 16"
            >
              <path d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1z" />
            </svg>
          </div>
          {hit.towing_available ? "Towing Available" : "Towing Unavailable"}
        </div>
        <div className="flex items-center flex-wrap">
          <div className="pt-1 pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </div>
          <div className="font-semibold">{`${opening} TO ${closing}`}</div>
        </div>
        <div className="flex items-center">
          <div className="pt-1 pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="">{`${hit.owner_first_name} ${hit.owner_last_name}`}</div>
        </div>
        <div className="flex py-1 justify-between">
          <span className="px-3 py-1  text-base rounded-2xl text-white font-semibold bg-red-500 hover:bg-red-700 ">
            <a href={`tel:${hit.garage_phn_num}`}>Call</a>
          </span>
          <span className="px-4 py-1 text-base rounded-2xl text-white font-semibold bg-gray-700 hover:bg-gray-900 ">
            <Link href={`/findMech/${hit.objectID}`}>See more</Link>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

HitComponent.propTypes = {
  hit: PropTypes.object,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facetCityToggle: false,
      facetStateToggle: false,
    };
  }

  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func,
    indexName: PropTypes.string,
    searchClient: PropTypes.object,
  };
  
  render() {
    return (
      <InstantSearch
        searchClient={this.props.searchClient}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
        indexName={this.props.indexName}
        onSearchParameters={this.props.onSearchParameters}
        {...this.props}
      >
        {/* 16.155805753646277, 73.56225632566726 jada
      16.154647352374763, 73.57335552890542 shanta
      16.15313337972147, 73.55600214789841  petrol
      16.152171617068255, 73.56065268742472 myloc */}
        <Configure
          // aroundLatLngViaIP={true}
          // aroundLatLng="16.152171617068255, 73.56065268742472"
          hitsPerPage="10"
          // aroundRadius="all"
        />
        <header>
          <SearchBox
            className="py-3 w-full m-auto px-3"
            translations={{
              placeholder: "Search by name,city,village,landmark,pincode...",
            }}
          />
          <div className="flex space-x-4 px-5 md:hidden">
            <button
              className="flex items-center px-4 py-2 text-base rounded-full text-white  bg-gray-800 "
              onClick={() =>
                this.setState({
                  facetCityToggle: !this.state.facetCityToggle,
                  facetStateToggle: false,
                })
              }
            >
              City
              <span className="ml-1 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </button>

            <button
              className="flex items-center px-4 py-2 text-base rounded-full text-white  bg-gray-800 "
              onClick={() =>
                this.setState({
                  facetStateToggle: !this.state.facetStateToggle,
                  facetCityToggle: false,
                })
              }
            >
              State
              <span className="ml-1 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </button>
          </div>
        </header>
        <main className="flex align-items-center px-5">
          <div
            className={
              this.state.facetCityToggle
                ? "absolute p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"
                : "hidden p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"
            }
          >
            <div>
              <button
                onClick={() =>
                  this.setState({
                    facetCityToggle: !this.state.facetCityToggle,
                  })
                }
                className="absolute right-3 top-3 font-bold md:hidden"
              >
                ❌
              </button>
              <h2 className="mb-1">City</h2>
              <RefinementList
                searchable={true}
                showMore={false}
                attribute="address.city"
              />
            </div>
          </div>
          <div className="results w-full min-h-screen sm:px-8 md:w-3/5 lg:w-2/4 py-3 m-auto px-2">
            <Hits hitComponent={HitComponent} />
          </div>
          <div
            className={
              this.state.facetStateToggle
                ? "absolute p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"
                : "hidden p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"
            }
          >
            <div>
              <button
                onClick={() =>
                  this.setState({
                    facetStateToggle: !this.state.facetStateToggle,
                  })
                }
                className="absolute right-3 top-3 font-bold md:hidden"
              >
                ❌
              </button>
              <h2 className="mb-1">State</h2>
              <RefinementList
                searchable={true}
                showMore={false}
                attribute="address.state"
              />
            </div>
          </div>
        </main>
        <div>
          <Pagination className="mb-3" />
        </div>
      </InstantSearch>
    );
  }
}