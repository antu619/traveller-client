import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="card w-full max-w-lg shadow-2xl bg-base-100 mx-auto my-20">
      <Helmet>
        <title>Contact - traveLLer</title>
      </Helmet>
      <form className="card-body">
        <h2 className="text-center text-3xl text-secondary font-semibold">
          Contact Us
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="text"
            type="name"
            placeholder="full Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            name="subject"
            type="text"
            placeholder="subject"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            type="text"
            placeholder="Description"
            className="textarea textarea-bordered"
            required
          />
        </div>
        <div className="form-control my-3">
          <input
            className="btn btn-primary text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
