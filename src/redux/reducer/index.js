import { combineReducers } from "redux";
import festivalReducer from "./festivalReducer";
import restaurantReducer from "./restaurantReducer";
import fesdetailReducer from "./fesdetailReducer";
import resdetailReducer from "./resdetailReducer";


export default combineReducers({
    festival : festivalReducer,    
    restaurant : restaurantReducer,
    fesDetail : fesdetailReducer,
    resDetail : resdetailReducer,
});