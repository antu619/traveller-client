import { useContext, useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { AuthContext } from "../../providers/AuthProvider";


const MyPosts = () => {

    const {user} = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    console.log(posts);
    

// handle remove
const handleRemove = (_id) => {
    setPosts(posts.filter((post) => post._id !== _id));
}

    const usersPosts = posts.filter(post => post.email === user.email)
    console.log(usersPosts);


    return (
        <div className="p-5 md:p-10 lg:p-20">
            <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        My Posts
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
            usersPosts?.map(post => <PostCard key={post._id} post={post} handleRemove={handleRemove} />)
        }
      </div>
        </div>
    );
};

export default MyPosts;