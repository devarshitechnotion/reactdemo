import React, { Component } from 'react';
import Check from "./Checkbox";
class H1 extends Component {
    render() {
        return (            
            <h1>
               {this.props.text}
            </h1>          
        );
    }
}

export default H1;