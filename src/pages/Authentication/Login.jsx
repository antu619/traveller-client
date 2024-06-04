import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [error, setError] = useState();
  // context
  const { user, logIn } = useContext(AuthContext);

  const [loginUser, setLoginUser] = useState('');
  const [token] = useToken(loginUser);

  // Redirect location
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || "/";

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result)
        setLoginUser(result?.user?.email)
      })
      .catch((error) => setError(error));
  };

  // redirect after login
    useEffect( () => {
    if(token || user){
      navigate(from, {replace: true})
    }
  }, [from, navigate, token, user])


  return (
    <div className="hero my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img
            className="lg:max-w-xl"
            src="https://i.ibb.co/mvQrm0f/login.jpg"
            alt="Login Image"
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center text-3xl text-secondary font-semibold">
              Login
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to={'/forget-pass'} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {/* Error message */}
            <p className="text-error">{error?.message}</p>
            <div className="form-control mb-3">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Login"
              />
            </div>
            <p>
              Do not have any account?{" "}
              <Link className="btnbtn btn-active btn-link" to={"/register"}>
                Register
              </Link>
            </p>
          <GoogleLogin setError={setError} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
