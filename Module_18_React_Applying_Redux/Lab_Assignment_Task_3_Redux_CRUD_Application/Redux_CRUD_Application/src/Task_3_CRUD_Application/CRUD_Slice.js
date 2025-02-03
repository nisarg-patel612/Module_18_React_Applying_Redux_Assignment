import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : []
}

const crudSlice = createSlice({
    name : "crud",
    initialState,
    reducers : {
        addItem : (state,action) => {
            state.items.push({ id : Date.now(), text : action.payload });
        },
        updateItem : (state,action) => {
            const { id, newText } = action.payload
            const item = state.items.find((item) => item.id === id);
            if (item) {
                state.items.text = newText
            }
        },
        deleteItem : (state,action) => {
            state.items = state.items.filter((item) => item.id === action.payload);
        }
    }
});

export const { addItem , updateItem , deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
