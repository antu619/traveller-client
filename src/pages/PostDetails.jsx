import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postData = useLoaderData();
    const {title, location, description, imgUrl} = postData;
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center font-semibold mb-16">Food Details</h2>
            <div className="lg:flex gap-10 lg:mx-20 mx-5">
                <img className="w-[500px]" src={imgUrl} alt="Food Image" />
                <div className="lg:mt-0 mt-5">
                <h2 className="text-4xl font-semibold">Title: <span className="font-medium text-secondary">{title}</span></h2>
                <h4 className="text-xl font-semibol my-3"><span className="font-bold">Location:</span> {location}</h4>
                <p className="text-xl"><span className="font-bold">Description:</span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;