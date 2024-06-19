import { useContext, useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";

const MyPosts = () => {
  const { user, logOut } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://traveller-server-ten.vercel.app/my-posts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message == "forbidden access") {
          logOut()
            .then(() => {})
            .catch((error) => console.log(error));
        }
        setPosts(data);
        setLoading(false);
      });
  }, [logOut]);

  if (loading) {
    return <Loading />;
  }
  console.log(posts);

  // handle remove
  const handleRemove = (_id) => {
    setPosts(posts.filter((post) => post._id !== _id));
  };

  // MY Posts
  const usersPosts = posts?.filter((post) => post?.email === user?.email);
  console.log(usersPosts);

  return (
    <div className="p-5 md:p-10 lg:p-20">
      <Helmet>
        <title>My Posts - traveLLer</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold text-secondary mb-10">
        My Posts
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {usersPosts?.map((post) => (
          <PostCard key={post._id} post={post} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
