import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from 'react-bootstrap';   
import DisplayList from './DisplayList';

class FilteredList extends Component {
    
    // inside constructor
    this.state = {
		element: All
	};

    onSelectFilterElement = event => {
        this.setState({
            size: event
        })
    };

    matchesFilterElement = item => {
        // all items should be shown when no filter is selected
        if(this.state.size === All) { 
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    }

    render() {
		return (
            <div>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterElement}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Water" onSelect={this.onSelectFilterElement}>Water</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Fire" onSelect={this.onSelectFilterElement}>Fire</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Wood" onSelect={this.onSelectFilterElement}>Wood</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Metal" onSelect={this.onSelectFilterElement}>Metal</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Earth" onSelect={this.onSelectFilterElement}>Earth</Nav.Link></Nav.Item>
                    </Navbar>

                    <Navbar bg="light" expand="lg">
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Yin" onSelect={this.onSelectFilterSize}>Yin</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Yang" onSelect={this.onSelectFilterSize}>Yang</Nav.Link></Nav.Item>
                    </Navbar>
                </div>

                <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>

            </div>
        );
	}
}

export default FilteredList

  