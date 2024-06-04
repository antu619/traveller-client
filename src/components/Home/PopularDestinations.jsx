const PopularDestinations = () => {
  return (
    <div className="lg:px-40 md:px-10 px-5 my-20">
      <h2 className="text-3xl text-center font-semibold text-secondary mb-20">
        Popular Destinations
      </h2>
      <div className="grid justify-around gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Berlin</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">München</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Hamburg</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Köln</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Frankfurt</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Heidelberg</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Stuttgart</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Nürnberg</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Dresden</h2>
          </div>
        </div>
        <div className="card w-40 glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Leipzig</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
