import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = ({setError}) => {

    const [loginUser, setLoginUser] = useState('');
  const [token] = useToken(loginUser);

  // Redirect location
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || "/";

    // context
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {
            console.log(result)
            setLoginUser(result?.user?.email)
            if(result?.user?.email){
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                fetch('https://traveller-server-ten.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            }
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
    }

    useEffect( () => {
        if(token){
          navigate(from, {replace: true})
        }
      }, [from, navigate, token])

    return (
        <div>
            <div className="divider divider-secondary">or</div>
        <p className="mb-5 text-center">Login with</p>
        <button onClick={handleGoogleLogin} className="btn btn-error text-white w-full">Google</button>
        </div>
    );
};

export default GoogleLogin;