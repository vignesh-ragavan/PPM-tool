import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
<<<<<<< HEAD
import projectReducers from "./projectReducers";

export default combineReducers({ errors:errorReducer,project:projectReducers});
=======
import projectReducer from "./projectReducer";


export default combineReducers({

    errors: errorReducer,
  project: projectReducer
});
>>>>>>> ProjecttaskBacklog
