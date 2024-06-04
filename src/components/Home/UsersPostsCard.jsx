import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const UsersPostsCard = () => {
    const [posts, setPosts] = useState([]);
    const [users, setusers] = useState([]);
    const [counterOn, setCounterOn] = useState(false);

    // get posts
    useEffect( () => {
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    

    // get users
    useEffect( () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setusers(data))
    }, [])

    console.log(users)

    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)}>
        <div className="flex flex-col lg:flex-row justify-evenly lg:px-40 md:px-10 px-5 my-28">
            {/* Users Card */}
            <div className="card w-96 bg-rose-200 text-black">
  <div className="card-body items-center text-center">

    {
        counterOn &&
    <h2 className="text-5xl font-semibold">
        <CountUp start={0} end={users.length} duration={3} delay={0} />
    </h2>
    }
    <h2 className="card-title">Users</h2>
  </div>
</div>
        {/* Posts Card */}
        <div className="card w-96 bg-cyan-200 text-black">
  <div className="card-body items-center text-center">
  {
        counterOn &&
    <h2 className="text-5xl font-semibold">
        <CountUp start={0} end={posts.length} duration={3} delay={0} />
    </h2>
    }
    <h2 className="card-title">Posts</h2>
  </div>
</div>
        </div>
        </ScrollTrigger>
    );
};

export default UsersPostsCard;