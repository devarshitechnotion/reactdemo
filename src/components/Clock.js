import React, { Component } from 'react';
import CheckBox from "./Checkbox";

class Clock extends Component {
    constructor(props)
    {
        super(props);
        this.state = {time : new Date()}
    }

    //life cycle methods
    componentDidMount()
    {
       this.timeID =  setInterval(() => this.tick(),1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timeID);
    }

    tick()
    {
        this.setState({
            time: new Date()
        });
    }
    render() {
        return (
           <span>
               <strong > Date: {this.state.time.toLocaleDateString()} </strong>
               <strong> Time: {this.state.time.toLocaleTimeString()}</strong>
               <CheckBox value="1" text="render other component here"/>
           </span>
        );
    }
}


export default Clock;