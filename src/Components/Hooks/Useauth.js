import { useContext } from "react";
import { Authcontext } from "../Context/Authprovider"

const Useauth=()=>{
    return useContext(Authcontext)
}
export default Useauth;