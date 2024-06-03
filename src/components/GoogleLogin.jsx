import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const GoogleLogin = ({setError}) => {
    // context
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => console.log(result))
        .catch(error => {
            console.log(error)
            setError(error)
        })
    }

    return (
        <div>
            <div className="divider divider-secondary">or</div>
        <p className="mb-5 text-center">Login with</p>
        <button onClick={handleGoogleLogin} className="btn btn-error text-white w-full">Google</button>
        </div>
    );
};

export default GoogleLogin;