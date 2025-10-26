import { render } from "@testing-library/react";
import { count } from "console";
import React , { Component } from "react";

// Define Props type
interface ClassCounterProps {

}

// Define State type 

interface ClassCounterState {
    count:number;
}

class ClassCounter extends Component <ClassCounterProps,ClassCounterState>{
    constructor(props : ClassCounterProps) {
        super(props);
        //Initialize state
        this.state = {
            count : 0,
        };
    }


// method to handle increment 

increment = () => {
    this.setState({ count: this.state.count + 1});
};

// method to handle decrement

decrement = () => {
    this.setState({ count: this.state.count - 1});
};

render() {
    return (
        <div style={{textAlign: "center",margin:"50px"}}>
            <h2>Counter: {this.state.count}</h2>
            <button onClick={this.decrement} style={{marginRight:"10px"}}>-</button>
            <button onClick={this.increment} style={{marginRight:"10px"}}>+</button>
        </div>
      
    );
}

}

export default ClassCounter;