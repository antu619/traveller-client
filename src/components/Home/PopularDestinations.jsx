import Marquee from "react-fast-marquee";

const PopularDestinations = () => {
  return (
    <div className="lg:px-40 md:px-10 px-5">
      <h2 className="text-3xl text-center font-semibold text-secondary my-10 lg:my-28">
        Popular Destinations
      </h2>
        <Marquee>
      <div className="flex justify-around gap-10 p-2">
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Berlin</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">München</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Hamburg</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Köln</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Frankfurt</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Heidelberg</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Stuttgart</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Nürnberg</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Dresden</h2>
          </div>
        </div>
        <div className="card w-40 bg-primary mr-6">
          <div className="card-body">
            <h2 className="text-xl text-white font-semibold text-center">Leipzig</h2>
          </div>
        </div>
      </div>
        </Marquee>
    </div>
  );
};

export default PopularDestinations;
