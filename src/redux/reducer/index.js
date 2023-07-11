import { combineReducers } from "redux";
import festivalReducer from "./festivalReducer";
import restaurantReducer from "./restaurantReducer";
import fesdetailReducer from "./fesdetailReducer";
import resdetailReducer from "./resdetailReducer";
import homeReducer from "./homeReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    festival : festivalReducer,    
    restaurant : restaurantReducer,
    fesDetail : fesdetailReducer,
    resDetail : resdetailReducer,
    home : homeReducer,
    search : searchReducer,
});