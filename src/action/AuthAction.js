import {DESHBOARD} from "./types"

export const DeshboardAction = () =>{
    return (dispatch) =>{
          dispatch({type:DESHBOARD,payload:"Hello World"})
    }
}