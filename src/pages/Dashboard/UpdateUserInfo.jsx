import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUserInfo = () => {
    const data = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const photoURL = form.photoURL.value;
    
        const userData = {
          name,
          phone,
          email: data?.email,
          address,
          photoURL
        };
    
        fetch(`http://localhost:5000/users/${data.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Update User Info!",
                icon: "success",
              });
        })
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
              Name:
              <input type="text" name="name" className="grow" required defaultValue={data?.name} />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Email:
              <input type="email" name="email" className="grow" required defaultValue={data?.email} disabled />
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
              Phone:
              <input type="number" name="phone" className="grow" required defaultValue={data?.phone}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
            Address:
              <input type="text" name="address" className="grow" required defaultValue={data?.address}/>
            </label>
          </div>
          <div className="form-control mb-2">
            <label className="input input-bordered flex items-center gap-2">
            Photo URL:
              <input type="text" name="photoURL" className="grow" required defaultValue={data?.photoURL}/>
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

export default UpdateUserInfo;