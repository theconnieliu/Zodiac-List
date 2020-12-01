import React, { useState, useEffect } from 'react';

const FilteredList = (props) => {
    const { list, setDisplayList } = props;

    // Is blank for no filter
    // Otherwise filter by Water, Earth, Wood, Fire, or Metal
    const [filterByElement, setFilterByElement] = useState('');

    // Is blank for no filter
    // Otherwise filter by Yin, Yang
    const [filterByAlignment, setFilterByAlignment] = useState('');

    // If true, preserves original order (initially ordered by race)
    // Otherwise, reverse order
    const [sortByRace, toggleSortByRace] = useState(true);

    const refreshDisplay = () => {
        let newDisplayList = [...list];

        // If Element is anything other than blank, filter again by the selected element
        if (filterByElement !== '') {
            newDisplayList = newDisplayList.filter(item => item.element === filterByElement);
        }

        // If Alignment is anything other than blank, filter again by the selected alignment
        if (filterByAlignment !== '') {
            newDisplayList = newDisplayList.filter(item => item.alignment === filterByAlignment);
        }

        // If sortByRace isn't true, reverse the order of the animals
        if (!sortByRace) {
            newDisplayList.sort((a, b) => b.raceIndex - a.raceIndex);
        }

        setDisplayList(newDisplayList);
    }

    useEffect(refreshDisplay, [filterByElement, filterByAlignment, sortByRace])

    // Resets all the filters and puts application back in original state
    const resetDisplay = () => {
        setFilterByElement("");
        setFilterByAlignment("");
        toggleSortByRace(true);
    }

    // Called when a new Element is selected as a filter
    const handleElementChange = (event) => {
        setFilterByElement(event.target.value);
    }

    // Called when a new Alignment is selected as a filter
    const handleAlignmentChange = (event) => {
        setFilterByAlignment(event.target.value);
    }

    // Called when a different Race Order is selected as a filter
    const handleRaceChange = (event) => {
        if (event.target.value === "Preserve order") {
            toggleSortByRace(true);
        } else {
            toggleSortByRace(false);
        }
    }

    return (
        <body>
        <h1>Choose Your Chinese Zodiac Race Team</h1>
        <div className="menu-bar">
            <div>
            {/* Element Filter Dropdown */}
            <span className="menu-label">Filter by Celestial Element</span>
            <select value={filterByElement} onChange={handleElementChange}>
                <option value="">All</option>
                <option value="Water">Water</option>
                <option value="Earth">Earth</option>
                <option value="Wood">Wood</option>
                <option value="Fire">Fire</option>
                <option value="Metal">Metal</option>
            </select>
            </div>
            <div>
            {/* Alignment Filter Dropdown */}
            <span className="menu-label">Filter by Yin Yang Alignment</span>
            <select value={filterByAlignment} onChange={handleAlignmentChange}>
                <option value="">All</option>
                <option value="Yin">Yin</option>
                <option value="Yang">Yang</option>
            </select>
            </div>
            <div>
            {/* Race Order Filter Dropdown */}
            <span className="menu-label">Sort by Race Order</span>
            <select value={sortByRace ? 'Preserve order' : 'Reverse order'} onChange={handleRaceChange}>
                <option value="Preserve order">Preserve order</option>
                <option value="Reverse order">Reverse order</option>
            </select>
            </div>
            {/* Resets all filters to original state */}
            <button onClick={resetDisplay}>Reset All Filters</button>
        </div>
        </body>
    );
}

export default FilteredList;