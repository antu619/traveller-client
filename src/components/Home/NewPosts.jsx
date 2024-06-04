import { useEffect, useState } from "react";
import Card from "./Card";


const NewPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
            <div className="lg:px-40 md:px-10 px-5 my-20">
                <h2 className="text-3xl text-center font-semibold text-secondary mb-20">
                Latest Posts
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {
                        
                            posts?.slice(0,6).map(post => <Card key={post._id} post={post} />)
                       
                    }
                </div>
            </div>
    );
};

export default NewPosts;