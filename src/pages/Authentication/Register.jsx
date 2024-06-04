import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const [error, setError] = useState();

  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);

  // Context
  const { user, createUser } = useContext(AuthContext);

  // redirect location
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || "/";

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        fetch("https://traveller-server-ten.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUserEmail(email);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error?.message);
      });
  };

  // redirect after login
  
  useEffect( () => {
    if(token){
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
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center text-3xl text-secondary font-semibold">
              Register
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            {/* Error message */}
            <p className="text-error">{error}</p>
            <div className="form-control mb-3">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Register"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link className="btnbtn btn-active btn-link" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
