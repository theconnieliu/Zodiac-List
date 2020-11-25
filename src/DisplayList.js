import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class DisplayList extends Component {
        
        render() {
		    return (
                <div>
                    {this.props.list.map(item => 
                    <div className="zodiac-card">
                        <span className="zodiac-header">{item.name}</span>
                        <span>{item.element}</span>
                        <span>{item.alignment}</span>
                    </div>)}
                </div>
            );
	    }
}


export default DisplayList

