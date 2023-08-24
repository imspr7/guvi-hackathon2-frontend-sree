import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import  imgurl from "../images/camera.jpg";

export function Firstpage() {
    const history =useHistory();
    useEffect(()=>{
      sessionStorage.clear();
    },[])
    return (
        <div>
            <h1 style={{color:"green"}}>WELCOME TO EQUIPEMENT RENTAL PORT</h1>
            <h3>Furnish your dreams with Us</h3>
            <img style={{ width: "70%", height: "70vh" }} src={imgurl} alt="RENTAL APP"></img>
           <div style={{padding:"10px"}}>
           <Button onClick={()=>history.push("/login")} style={{backgroundColor:"blue",color:"white",borderRadius:"10px",width:"100px",height:"60px",fontSize:"20px"}} className="firstpage-button">Log In</Button>
           </div>
        
        </div>
    )
}