import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  projects: projectsReducer,
  auth: authReducer,
});
