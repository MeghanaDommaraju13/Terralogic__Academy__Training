import React , {useState} from "react";

function Counter() {
    const[count,setCount] = useState(0); // Initialize with 0;
    const increment = () => {
        setCount(count + 1); //Update the state
    };
    const decrement = () => {
        setCount(count > 0 ? count -1 :count);
    }
    return(
        <div>
            <p>count: {count>0?count:null}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );

}
 
export default Counter;