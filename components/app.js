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
  return (
    <div className="hit">
      <div className="hit-content">
        <div>
          <Highlight attribute="name" hit={hit} />
        </div>
        <div className="hit-type">
          <Highlight attribute="country" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="iata_code" hit={hit} />
        </div>
        <div>{hit.links_count}</div>
        <div>{hit.city}</div>
      </div>
    </div>
  );
};

HitComponent.propTypes = {
  hit: PropTypes.object,
};

export default class App extends React.Component {
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
          <SearchBox />
        </header>
        <main>
          <div className="menu my-2">
            <RefinementList attribute="country" />
          </div>
          <div className="results">
            <Hits hitComponent={HitComponent} />
          </div>
        </main>
        <footer>
          <Pagination />
        </footer>
      </InstantSearch>
    );
  }
}
