import { useEffect, useState } from "react";
import Card from "../components/Home/Card";
import { Helmet } from "react-helmet-async";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearchPosts(search)
  }
  const filteredPosts = posts?.filter(post => post?.title.toLowerCase().includes(searchPosts.toString().toLowerCase()));

  console.log(filteredPosts)


 
  return (
    <div className="lg:px-40 md:px-10 px-5 my-10">
      <Helmet>
        <title>Posts - traveLLer</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold text-secondary">
        Latest Posts
      </h2>
      <div className="flex justify-center my-10">
      <form onSubmit={handleSearch} className="join">
        <input name="search" type="text" placeholder="Search..." className="input input-bordered join-item lg:w-96 md:w-80" />
        <input className="btn btn-primary join-item w-28 text-white" type="submit" value="Search" />
      </form>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {filteredPosts ?
        filteredPosts?.map((post) => (
          <Card key={post._id} post={post} />
        )):
        <p>Your result is not found!</p>
      }
      </div>
    </div>
  );
};

export default Posts;
