import Swal from "sweetalert2";
import subscribeImg from '../../assets/subscribe.png'

const Subscribe = () => {


    const handleSearch = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

         // Upload post api
    await fetch('https://traveller-server-ten.vercel.app/subscribers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('token')}`
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
        <div className="relative mt-10 lg:mt-28">
            <div className="md:absolute md:top-1/2 md:left-12 lg:absolute lg:top-[200px] lg:left-40">
            <form onSubmit={handleSearch} className="join w-full justify-center mb-5">
        <input name="email" type="email" placeholder="Provide Your Email" className="input input-bordered join-item lg:w-96" />
        <input className="btn btn-primary join-item w-28 text-white" type="submit" value="Subscribe" />
      </form>
            </div>
          <img className="w-full" src={subscribeImg} alt="" />
        </div>
    );
};

export default Subscribe;