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
                <div className="aggregate-announce">
                <h2>Number of Combined Celestial Legs is... <span className="total-legs">{list.reduce((total, animal) => {
                    if(this.isIgnored(animal.raceIndex)) {
                        return total;
                    }
                    return total + animal.numLegs;
                    }, 0)}</span></h2>
                {list.length === 0 && (
                    <span>No Animals Bro</span>
                )}
                </div>
                <br></br>
                <div className="card-container">
                {list.map((item, index) =>
                    <div key={index} className={`zodiac-card ${this.isIgnored(item.raceIndex) ? "" : "highlighted"}`}>
                        <img src={item.svg}/>
                        <br></br>
                        <span><b>{item.name}</b></span>
                        <span>Element: {item.element}</span>
                        <span>Alignment: {item.alignment}</span>
                        <span>Race Number: {item.raceIndex}</span>
                        <span>Number of Legs: {item.numLegs}</span>
                        <br></br>
                        <button onClick={handleRemove(item.raceIndex)}>Add/Remove</button>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default DisplayList