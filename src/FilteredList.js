import React, { useState, useEffect } from 'react';

const FilteredList = (props) => {
    const { list, setDisplayList } = props;

    // Is blank for no filter
    // Otherwise filter by Water, Earth, Wood, Fire, or Metal
    const [filterByElement, setFilterByElement] = useState('');

    // Is blank for no filter
    // Otherwise filter by Yin, Yang
    const [filterByAlignment, setFilterByAlignment] = useState('');

    // If true, preserves original order (already ordered by race)
    // Otherwise, reverse order
    const [sortByRace, toggleSortByRace] = useState(true);

    const refreshDisplay = () => {
        let newDisplayList = [...list];

        if (filterByElement !== '') {
            newDisplayList = newDisplayList.filter(item => item.element === filterByElement);
        }

        if (filterByAlignment !== '') {
            newDisplayList = newDisplayList.filter(item => item.alignment === filterByAlignment);
        }

        if (!sortByRace) {
            newDisplayList.sort((a, b) => b.raceIndex - a.raceIndex);
        }

        setDisplayList(newDisplayList);
    }

    useEffect(refreshDisplay, [filterByElement, filterByAlignment, sortByRace])

    const resetDisplay = () => {
        setFilterByElement("");
        setFilterByAlignment("");
        toggleSortByRace(true);
    }

    const handleElementChange = (event) => {
        setFilterByElement(event.target.value);
    }

    const handleAlignmentChange = (event) => {
        setFilterByAlignment(event.target.value);
    }

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
            <span className="menu-label">Filter by Yin Yang Alignment</span>
            <select value={filterByAlignment} onChange={handleAlignmentChange}>
                <option value="">All</option>
                <option value="Yin">Yin</option>
                <option value="Yang">Yang</option>
            </select>
            </div>
            <div>
            <span className="menu-label">Sort by Race Order</span>
            <select value={sortByRace ? 'Preserve order' : 'Reverse order'} onChange={handleRaceChange}>
                <option value="Preserve order">Preserve order</option>
                <option value="Reverse order">Reverse order</option>
            </select>
            </div>
            <button onClick={resetDisplay}>Reset All Filters</button>
        </div>
        </body>
    );
}

export default FilteredList;