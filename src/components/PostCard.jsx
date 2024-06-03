import { CiEdit } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const PostCard = ({post}) => {
    const {_id, title, location, description} = post;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-secondary">{title}</h2>
    <p>{description}</p>
    <div className="flex items-center gap-2">
    <FaLocationDot className="text-lg text-gray-500" />
    <p>{location}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-error text-white"><MdDelete className="text-xl" /></button>
      <Link to={`/dashboard/update-post/${_id}`} className="btn btn-sm btn-secondary text-white"><CiEdit className="text-xl" /></Link>
      <Link to={`/posts/${_id}`} className="btn btn-sm btn-primary text-white">Details</Link>
    </div>
  </div>
</div>
    );
};
export default PostCard;