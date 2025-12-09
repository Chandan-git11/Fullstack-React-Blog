import React ,{useEffect,useState}from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";



export default function Protected({ children,authentication= true
    }) {
        const navigate=useNavigate();
        const [loader, setLoader]=useState(true);
        const authstatus=useSelector((state =>state.auth.status))

        useEffect(()=>{
           if (authentication && authstatus !== true) {
      navigate("/login");
    }
    // Page requires NOT being logged in (Login/Signup pages)
    else if (!authentication && authstatus === true) {
      navigate("/");
    }
            setLoader(false);
        },[authentication,authstatus,navigate])
        
       return loader ? <h1>Loading.....</h1>:<>{children}</>
        

    }
 