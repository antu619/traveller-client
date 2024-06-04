import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ForgetPass = () => {
  const { forgetPassword } = useContext(AuthContext);

  const handleForgetPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email)
    forgetPassword(email)
      .then(() => {
        Swal.fire({
            title: "Good job!",
            text: "Please check you email to get forget password link!",
            icon: "success",
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="p-5">
      <div className="w-full mx-auto max-w-sm rounded-xl p-4 my-5 md:my-10 lg:my-16 shadow-2xl">
        <h2 className="text-center text-3xl text-secondary font-semibold my-5">
          Forget Password
        </h2>
        <form onSubmit={handleForgetPass} className="">
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
          <div className="form-control mt-4">
            <input
              className="btn btn-primary text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
