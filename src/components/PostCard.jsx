import { CiEdit } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PostCard = ({post, handleRemove}) => {
    const {_id, title, location, description, imgUrl} = post;


    const handleDelete = async() => {
      const alert = window.confirm(`Are you sure! You Want To Delete "${title}"`);
      if(alert){
        await fetch(`http://localhost:5000/posts/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          handleRemove(_id)
          console.log(data)
          Swal.fire({
            title: "Good job!",
            text: "Successfully Upload A Post!",
            icon: "success",
          });
        })
      }
    }
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
      <button onClick={handleDelete} className="btn btn-sm btn-error text-white"><MdDelete className="text-xl" /></button>
      <Link to={`dashboard/update-post/${_id}`} className="btn btn-sm btn-secondary text-white"><CiEdit className="text-xl" /></Link>
      <Link to={`/posts/${_id}`} className="btn btn-sm btn-primary text-white">Details</Link>
    </div>
  </div>
</div>
    );
};
export default PostCard;