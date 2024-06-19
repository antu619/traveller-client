import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "../Loading";


const NewPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        fetch("https://traveller-server-ten.vercel.app/posts")
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setLoading(false);
        })
    }, []);

    if(loading){
        return <Loading />;
    }
    return (
            <div className="lg:px-40 md:px-10 px-5">
                <h2 className="text-3xl text-center font-semibold text-secondary my-10 lg:my-28">
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