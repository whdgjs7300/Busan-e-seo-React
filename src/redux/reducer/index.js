import { combineReducers } from "redux";
import festivalReducer from "./festivalReducer";
import restaurantReducer from "./restaurantReducer";
import fesdetailReducer from "./fesdetailReducer";
import resdetailReducer from "./resdetailReducer";
import userReducer from "./userReducer";

export default combineReducers({
    festival : festivalReducer,    
    restaurant : restaurantReducer,
    fesDetail : fesdetailReducer,
    resDetail : resdetailReducer,
    user : userReducer,
});