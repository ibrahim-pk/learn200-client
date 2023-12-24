import { Link } from "react-router-dom";

const AllCourse = () => {
  return (
    <div className="bg-neutral px-10 py-20">
       <div className="md:flex justify-center gap-5 max-w-screen-lg mx-auto">
       <div className="card  max-w-screen-md mx-auto bg-base-100 shadow-2xl">
        <div className="md:flex">
          <figure className="w-full md:w-1/2">
            <img className="w-full h-full" src="/image/webdev.png" alt="Movie" />
          </figure>
          <div className="card-body w-full md:w-1/2">
            <h2 className="card-title text-2xl">Full Webdevelopment Course</h2>
            <h3 className="text-xl my-1">Tk.2500</h3>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn bg-neutral text-white"><Link to='/course/details/1'>Details</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div className="card  max-w-screen-md mx-auto bg-base-100 shadow-2xl">
        <div className="md:flex">
          <figure className="w-full md:w-1/2">
            <img className="w-full h-full" src="/image/webdev.png" alt="Movie" />
          </figure>
          <div className="card-body w-full md:w-1/2">
            <h2 className="card-title text-2xl">Full Webdevelopment Course</h2>
            <h3 className="text-xl my-1">Tk.2500</h3>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn bg-neutral text-white"><Link to='/course/details/1'>Details</Link></button>
            </div>
          </div>
        </div>
      </div>
       </div>

      {/* <div className="text-white my-20">
        <h2 className="text-center text-3xl py-5">About The Instructor</h2>
        <div className="card  max-w-screen-md mx-auto bg-neutrals shadow-2xl text-white">
          <img src="/image/pkbanner.png" alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default AllCourse;
