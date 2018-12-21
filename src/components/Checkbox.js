import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <span>
                <input type = "checkbox" value = {this.props.value}/>{this.props.text}
            </span>
        );
    }
}

export default Checkbox;