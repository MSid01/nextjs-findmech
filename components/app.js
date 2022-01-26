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

const HitComponent = ({ hit }) => {
  // console.log(hit);
  return (
    <div className="hit">
      <div className="hit-content">
        <div>
          <Highlight
            className="font-semibold garage_name"
            attribute="garage_name"
            hit={hit}
          />
        </div>
        <div>
          <Highlight
            className="font-semibold"
            attribute="address.state"
            hit={hit}
          />
        </div>
        <div className="hit-type">
          <Highlight attribute="address.city" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="address.street" hit={hit} />
        </div>
        <div>{hit.garage_rating}</div>
        <div>{hit.towing_available ? "Towing available" : "no towing"}</div>
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
      facetStateToggle: false
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
        <Configure hitsPerPage={12} />
        <header>
          <SearchBox className="py-3 w-full m-auto px-5" />
          <div className="flex space-x-4 px-5 md:hidden">
            <button className="px-4 py-2 text-base rounded-full text-white  bg-gray-800 "
              onClick={() =>
                this.setState({ facetCityToggle: !this.state.facetCityToggle, facetStateToggle: false })
              }
            >
              City
            </button>
            <button className="px-4 py-2 text-base rounded-full text-white  bg-gray-800 "
              onClick={() =>
                this.setState({ facetStateToggle: !this.state.facetStateToggle, facetCityToggle: false })
              }
            >
              State
            </button>
          </div>
        </header>
        <main className="flex align-items-center px-5">
          <div className={this.state.facetCityToggle ? "absolute p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2": "hidden p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"}>
            <div>
              <button onClick={() =>
                this.setState({ facetCityToggle: !this.state.facetCityToggle})
              } className="absolute right-3 top-3 font-bold md:hidden" >❌</button>
              <h2 className="mb-1">City</h2>
              <RefinementList searchable={true} showMore={false} attribute="address.city" />
            </div>
          </div>
          <div className="results w-full min-h-screen sm:px-8 md:w-3/5 lg:w-2/4 py-3 m-auto px-2">
            <Hits hitComponent={HitComponent} />
          </div>
          <div className={this.state.facetStateToggle ?"absolute p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2" : "hidden p-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-md md:flex md:static flex-col md:w-1/5 lg:w-1/4 menu my-2"}>
            <div>
              <button onClick={() =>
                this.setState({ facetStateToggle: !this.state.facetStateToggle})
              } className="absolute right-3 top-3 font-bold md:hidden" >❌</button>
              <h2 className="mb-1">State</h2>
              <RefinementList searchable={true} showMore={false} attribute="address.state" />
            </div>
          </div>
        </main>
        <div>
          <Pagination className='mb-3' />
        </div>
      </InstantSearch>
    );
  }
}
