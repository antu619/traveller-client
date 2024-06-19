import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import EssentialItems from "../components/Home/EssentialItems";
import NewPosts from "../components/Home/NewPosts";
import PopularDestinations from "../components/Home/PopularDestinations";
import Subscribe from "../components/Home/Subscribe";
import FreqQuestions from "../components/Home/FreqQuestions";
// import UsersPostsCard from "../components/Home/UsersPostsCard";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - traveLLer</title>
      </Helmet>
      <Banner />
      <NewPosts />
      <PopularDestinations />
      <EssentialItems />
      <FreqQuestions />
      <Subscribe />
    </div>
  );
};

export default Home;
