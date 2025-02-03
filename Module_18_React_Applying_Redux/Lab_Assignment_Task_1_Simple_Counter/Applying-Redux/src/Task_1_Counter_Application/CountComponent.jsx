import React from "react";
import { useSelector,useDispatch } from "react-redux";


const CountComponent = () => {
    // Access state from the redux store
    const counter = useSelector((state) => state.counter);

    // Dispatch actions
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Simple Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => dispatch({ type : "INCREMENT" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type : "DECREMENT" })}>
                Decrement
            </button>
        </div>
    )
}

export default CountComponent;