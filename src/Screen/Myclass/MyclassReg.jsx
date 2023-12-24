import { Link } from "react-router-dom";

const MyclassReg = () => {
  return (
    <div className="bg-neutral px-10 py-20">
      <div className="card w-1/3 bg-base-100 shadow-2xl">
        <div className="md:flex">
          <figure className="w-full md:w-1/2">
            <img
              className="w-full h-full"
              src="/image/webdev.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body w-full md:w-1/2">
            <h2 className="card-title text-xl">Full Webdevelopment Course</h2>

            <div className="card-actions  justify-end">
              <Link to="/my/class/1" className="btn bg-neutral text-white">
                Watch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyclassReg;
