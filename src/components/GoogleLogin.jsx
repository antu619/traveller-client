import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const GoogleLogin = ({setError}) => {
    // context
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {
            console.log(result)
            if(result?.user?.email){
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
        })
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