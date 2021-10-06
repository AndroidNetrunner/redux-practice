import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./components/PlayerSlice";
export default configureStore({
    reducer: {
        Player: PlayerReducer
    }
});
