import { combineReducers } from "redux";
import festivalReducer from "./festivalReducer";
import restaurantReducer from "./restaurantReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
    festival : festivalReducer,    
    restaurant : restaurantReducer,
    detail : detailReducer,
});