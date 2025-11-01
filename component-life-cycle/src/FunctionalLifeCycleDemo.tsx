import React, { useEffect, useState } from "react";

const FunctionalLifeCycleDemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    // Runs once when component mounts

    useEffect(() => {
        console.log("Component Mounted")

        //Runs when component unmounts
        return () => {
            console.log("Component Unmounted")
        };
    }, []);

    // runs on every re-render (update)

    useEffect(() =>{
        console.log("Component Update: Count Changes To", count);
    }, [count]);

    return (
        <div>
            <h2>functional Lifecycle Demo</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default FunctionalLifeCycleDemo;
