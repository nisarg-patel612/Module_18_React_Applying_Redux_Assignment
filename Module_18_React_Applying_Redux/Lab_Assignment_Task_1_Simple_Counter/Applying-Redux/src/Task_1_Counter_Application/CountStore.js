import { createStore } from "redux";

const initialState = {
    counter: 0,
};

const counterReducer = (State = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": 
        return {
            ...State,
            counter: State.counter + 1 
        } 
        case "DECREMENT": 
        return {
            ...State,
            counter: State.counter - 1 
        } 
        default: 
            return State;
    }
};

const store = createStore(counterReducer);

export default store;