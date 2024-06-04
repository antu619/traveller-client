import Banner from "../components/Home/Banner";
import NewPosts from "../components/Home/NewPosts";
import Subscribe from "../components/Home/Subscribe";
import UsersPostsCard from "../components/Home/UsersPostsCard";


const Home = () => {
    return (
        <div>
            <Banner/>
            <NewPosts/>
            <UsersPostsCard />
            <Subscribe />
        </div>
    );
};

export default Home;