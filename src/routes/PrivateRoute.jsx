import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


const PrivateRoute = ({children}) => {
    // context
    const {user, loading} = useContext(AuthContext);

    // redirect location
    const location = useLocation();
    
    if(loading){
        return <Loading />;
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'} />
};

export default PrivateRoute;