import { applyMiddleware, createStore } from "redux";
import RootReducer from "./Reducers/RootReducer";
import reduxThunk from "redux-thunk"
const middleWare=[reduxThunk]
const store=createStore(RootReducer,applyMiddleware(...middleWare))
export default store

