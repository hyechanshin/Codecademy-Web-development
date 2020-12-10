import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOption() {
    // The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.
        return Object.keys(softByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOption[sortByOptions];
            return <li key="sortByOptionValue">{sortByOption}</li>;
        });
    }
    render() {
        return (
            <div class="SearchBar">
                <div class="SearchBar-sort-options">
                    <ul>
                    <!-- Use .renderSortByOptions() to sort the businesses by their options -->
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div class="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}