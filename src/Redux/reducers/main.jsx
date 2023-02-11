import {combineReducers} from "redux";
import { cartreducer } from "./ProductReducers";


const rootred = combineReducers({
    cartreducer
});


export default rootred