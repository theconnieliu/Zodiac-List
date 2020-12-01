import React, { Component } from 'react'

class DisplayList extends Component {
    constructor(props){
        super(props);
        this.state = {
            ignored: this.props.list.map(animal => animal.raceIndex)
        };
    }

    isIgnored(raceIndex) {
        return this.state.ignored.some(item => item === raceIndex);
    }
    
    render() {
        const {list} = this.props;

        {/* Removes an animal from aggregated list if it has already been selected. */}
        const handleRemove = (raceIndex) => () => {
            if(this.isIgnored(raceIndex)) {
                this.setState({
                    ignored: this.state.ignored.filter(item => item !== raceIndex)
                });
            } else {
                this.setState({
                    ignored: [...this.state.ignored, raceIndex]
                })
            }
        }

        return (
            <div className="main-container">
                {/* Aggregator Section*/}
                <div className="aggregate-announce">

                    {/* Displays number of total legs */}
                    <h2>Number of Combined Celestial Legs is... <span className="total-legs">{list.reduce((total, animal) => {
                        if (this.isIgnored(animal.raceIndex)) {
                            return total;
                        }
                        return total + animal.numLegs;
                    }, 0)}</span></h2>
                    {list.length === 0 && (
                        <span>No Animals Found</span>
                    )}

                    {/* Displays names of selected Animals */}
                    <h3>Selected Animals: <span className="selected-animals">{list.reduce((names, animal) => {
                        if (this.isIgnored(animal.raceIndex)) {
                            return names;
                        }
                        return names + animal.name + ", ";
                    }, "")}</span></h3>

                </div>
                <br></br>
                <div className="card-container">
                    
                    {/* Each animal is mapped with its attributes. If it isn't ignored, it is highlighted to show it
                has been selected */}
                    {list.map((item, index) =>
                        <div key={index} className={`zodiac-card ${this.isIgnored(item.raceIndex) ? "" : "highlighted"}`}>
                            <img src={item.svg} />
                            <br></br>
                            <span><b>{item.name}</b></span>
                            <span>Element: {item.element}</span>
                            <span>Alignment: {item.alignment}</span>
                            <span>Race Number: {item.raceIndex}</span>
                            <span>Number of Legs: {item.numLegs}</span>
                            <br></br>
                            {/* Button on each card to either Add or Remove an animals from the aggregated list */}
                            <button onClick={handleRemove(item.raceIndex)}>Add/Remove</button>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default DisplayList