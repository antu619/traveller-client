import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UploadPost = () => {
  // Context
  const { user, logOut } = useContext(AuthContext);
  const email = user.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const location = form.location.value;
    const imgUrl = form.imgUrl.value;
    const description = form.description.value;

    const postData = { title, location, imgUrl, description, email };
    console.log(postData);

    // Upload post api
    await fetch("https://traveller-server-ten.vercel.app/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message == "forbidden access") {
          logOut()
            .then(() => {})
            .catch((error) => console.log(error));
        }
        else{
          Swal.fire({
            title: "Good job!",
            text: "Successfully Upload A Post!",
            icon: "success",
          });
          form.reset();

        }
      });
  };

  return (
    <div className="p-5 md:p-10 lg:p-20">
      <Helmet>
        <title>Upload Post - traveLLer</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        Upload A Post
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Title:
              <input type="text" name="name" className="grow" required />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Location:
              <input type="text" name="location" className="grow" required />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Image URL:
              <input type="text" name="imgUrl" className="grow" required />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="textarea textarea-bordered flex items-center gap-2">
              Description:
              <textarea
                type="text"
                name="description"
                className="grow"
                required
              ></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
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

export default UploadPost;
