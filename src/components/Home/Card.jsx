import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({post}) => {
    const {_id, title, location, description, imgUrl} = post;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={imgUrl} alt="Image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-secondary">{title}</h2>
    <p>{description.slice(0, 130)}...{" "}</p>
    <div className="flex items-center gap-2">
    <FaLocationDot className="text-lg text-gray-500" />
    <p>{location}</p>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/posts/${_id}`} className="btn btn-sm btn-primary text-white">Details</Link>
    </div>
  </div>
</div>
    );
};

export default Card;