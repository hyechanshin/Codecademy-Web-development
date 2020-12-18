import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    getSortByClass(sortByOption) {
    //returns the current CSS class for a sorting option
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }
    
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    renderSortByOptions() {
    // The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptions)}>{sortByOption}</li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;