import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slices/TodoSlice.js";

let Store = configureStore({
    reducer: {
        todos : TodoSlice
    }
});

export default Store;