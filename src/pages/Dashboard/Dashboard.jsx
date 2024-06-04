import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const {user} = useContext(AuthContext);

    const [dbUser, setDbUserInfo] = useState();

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    console.log(posts);

    // My Posts
    const usersPosts = posts.filter(post => post.email === user.email)
    console.log(usersPosts);


  useEffect( () => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then((res) => res.json())
    .then(data => setDbUserInfo(data));
  }, [user?.email])
    return (
        <div className="p-5 md:p-10 lg:p-20">
            <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        Overview
      </h2>
      <div className="flex justify-center gap-10">
        {/* User Ingo */}
        <div className="flex justify-center mt-10">
        <div>
            <h3 className="text-secondary text-center text-xl mb-10 font-semibold">User Info</h3>
        <div className="card w-96 bg-base-100 shadow-xl">
          {user?.photoURL || dbUser?.photoURL ? (
            <div className="avatar flex justify-center">
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || dbUser?.photoURL} />
              </div>
            </div>
          ) : (
            <div className="avatar flex justify-center">
            <div className="w-48 h-48 rounded-full ring ring-primary bg-base-200 ring-offset-base-100 ring-offset-2">
                <FaUser className="text-[192px]" />
            </div>
            </div>
          )}
          <div className="card-body text-center">
            <h2 className="text-xl">
              <span className="font-semibold">Name:</span> {dbUser?.name ? dbUser.name : "Not Found"}
            </h2>
            <p>
              <span className="font-semibold">Email:</span> {dbUser?.email ? dbUser.email : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {dbUser?.phone ? dbUser.phone : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {dbUser?.address ? dbUser.address : "Not Found"}
            </p>
        <Link to={`/dashboard/profile/update/${dbUser?._id}`} className="btn btn-primary text-white mt-3">Edit Profile</Link>
          </div>
        </div>
        </div>
      </div>
        {/* User Activites */}
        <div className="mt-10">
        <h3 className="text-secondary text-center text-xl font-semibold mb-10">User Activites</h3>
        <div className="card w-72 h-52 bg-neutral text-neutral-content">
  <div className="card-body justify-center text-center">
    <h2 className="text-2xl font-semibold">{usersPosts?.length}</h2>
    <h2 className="text-2xl font-semibold">Posts</h2>
  </div>
</div>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;