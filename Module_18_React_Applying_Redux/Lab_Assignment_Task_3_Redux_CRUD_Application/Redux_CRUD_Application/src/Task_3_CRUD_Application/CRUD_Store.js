import { configureStore } from "@reduxjs/toolkit"
import crudReducer from "./CRUD_Slice";

const store = configureStore({
    reducer : {
        crud : crudReducer,
    }
})

export default  store;