import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const data = useLoaderData();

  // Context
  const { user } = useContext(AuthContext);
  const email = user?.email;

  // Handle Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const imgUrl = form.imgUrl.value;
    const description = form.description.value;

    const postData = { title, location, imgUrl, description, email };

    const alert = window.confirm(
      `Are you sure? You want to update "${data.title}`
    );

    if (alert) {
      await fetch(`http://localhost:5000/posts/${data._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: "Good job!",
            text: "Successfully Update A Post!",
            icon: "success",
          });
        });
    }
  };
  return (
    <div className="p-5 md:p-10 lg:p-20">
      <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        Upload A Post
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Title:
              <input type="text" name="title" className="grow" required defaultValue={data?.title} />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Location:
              <input type="text" name="location" className="grow" required defaultValue={data?.location}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Image URL:
              <input type="text" name="imgUrl" className="grow" required defaultValue={data?.imgUrl}/>
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
                defaultValue={data?.description}
              ></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
