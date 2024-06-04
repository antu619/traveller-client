const EssentialItems = () => {
  return (
    <div className="lg:px-40 md:px-10 px-5 my-20">
      <h2 className="text-3xl text-center font-semibold text-secondary mb-20">Travel Essentials</h2>
      <div className="flex gap-5">
        {/* Item 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/2vhPyXF/pexels-pixabay-51383.jpg"
              alt="Camera"
            />
          </figure>
          <div className="card-body justify-center">
            <div>
              <h2 className="card-title justify-center">Camera</h2>
              <p className="text-center">$225.50</p>
            </div>
          </div>
        </div>
        {/* Item 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/QDgB4Mh/pexels-anete-lusina-4793154.jpg"
              alt="Camera"
            />
          </figure>
          <div className="card-body justify-center">
            <div>
              <h2 className="card-title justify-center">Camera Tripod</h2>
              <p className="text-center">$225.50</p>
            </div>
          </div>
        </div>
        {/* Item 1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/LSDQ2kM/pexels-juliasakelli-1342529.jpg"
              alt="Camera"
            />
          </figure>
          <div className="card-body justify-center">
            <div>
              <h2 className="card-title justify-center">Water Bottle</h2>
              <p className="text-center">$225.50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialItems;
