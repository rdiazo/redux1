import { configureStore } from "@reduxjs/toolkit";
import counter from './states/counter.state'

export default configureStore({
    reducer: {
        counter
    }
})