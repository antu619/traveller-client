import Banner from "../components/Home/Banner";
import NewPosts from "../components/Home/NewPosts";
import UsersPostsCard from "../components/Home/UsersPostsCard";


const Home = () => {
    return (
        <div>
            <Banner/>
            <NewPosts/>
            <UsersPostsCard />
        </div>
    );
};

export default Home;