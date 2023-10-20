import BAButton from "../../Components/BAButton";
import not_found from "../../Assets/Backgrounds/not found.png"
import { Typography } from "@mui/material";
export default function NotFound() {
  
const Goback = ()=>{
  window.history.back();
}
  return (
    <div className="d-flex align-items-center justify-content-center h-screen">
    <div className="container row d-flex align-items-center justify-content-center">
       
        <div className="col-6 text-center ">
            <div className="ms-5">
                <img src={not_found} alt="404! Page Not Found."  />
            <div className="d-flex align-items-center justify-content-center gap-2 m-2 "></div>
            </div>
                <Typography className="py-2" variant ="h4">The page you are trying to visit might not exist.</Typography>
            <div className="d-flex align-items-center justify-content-center gap-2 m-2 ">
                <BAButton onClick={()=>{Goback()}} label="Go back " className="text-white rounded"/>
            </div>
        </div>
    </div>
        </div>
  );
}