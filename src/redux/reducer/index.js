import { combineReducers } from "redux";
import festivalReducer from "./festivalReducer";
import restaurantReducer from "./restaurantReducer";

export default combineReducers({
    festival : festivalReducer,    
    restaurant : restaurantReducer,
});