import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import {PATH} from "../../main/ui/routes/RoutesList";

// @ts-ignore
export const RequireAuth =({children})=>{
    const location=useLocation()
    const auth=false
    if(!auth){
        return <Navigate to={PATH.login} state={{from:location}}/>
    }
    return children
}