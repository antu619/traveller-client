import Swal from "sweetalert2";


const Subscribe = () => {


    const handleSearch = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

         // Upload post api
    await fetch('http://localhost:5000/subscribers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: "Good job!",
            text: "Successfully Subscribed!",
            icon: "success",
          });
          form.reset();
        });
    }
    return (
        <div className="flex justify-between items-center p-3 bg-base-200 my-28 lg:mx-40 md:px-10 px-5 rounded-lg">
            <p>Get our latest blog posts notification by email.</p>
            <form onSubmit={handleSearch} className="join">
        <input name="email" type="email" placeholder="email" className="input input-bordered join-item w-96" />
        <input className="btn btn-primary join-item w-28 text-white" type="submit" value="Subscribe" />
      </form>
        </div>
    );
};

export default Subscribe;