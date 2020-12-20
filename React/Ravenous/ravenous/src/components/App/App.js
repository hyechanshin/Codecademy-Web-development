import React from 'react';
import './App.css';

import BusinessList from './../BusinessList/BusinessList';
import SearchBar from './../SearchBar/SearchBar';

import Yelp from './../../util/Yelp';

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`You are searching for ${term}, ${location}, and ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
