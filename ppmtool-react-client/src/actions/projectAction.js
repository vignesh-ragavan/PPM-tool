import axios from "axios";
<<<<<<< HEAD
import { GET_ERRORS,GET_PROJECTS,GET_PROJECT } from "./types";
=======
import { GET_ERRORS,GET_PROJECTS,GET_PROJECT ,DELETE_PROJECT} from "./types";
>>>>>>> ProjecttaskBacklog

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8081/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
      
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjects=()=>async dispatch=>{
 const res=await axios.get("http://localhost:8081/api/project/all") ;
 dispatch({

  type:GET_PROJECTS,
  payload:res.data
 });
  
};


export const getProject=(id,history)=>async dispatch=>{
  try {

    const res=await axios.get(`http://localhost:8081/api/project/${id}`) ;
    dispatch({
   
     type:GET_PROJECT,
     payload:res.data
    });
     
    
  } catch (error) {
    
    history.push("/dashboard")
  }

<<<<<<< HEAD
 };
=======
 };export const deleteProject = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  }
};
>>>>>>> ProjecttaskBacklog
