const StudentReview = () => {
  return (
    <div className="bg-neutral text-center py-10  text-neutral-content">
      <div className="flex justify-around gap-10  max-w-screen-md mx-auto items-center">
        <div className="studentReview w-1/3">
          <label htmlFor="reviwe-modal" className="btn btn-sm btn-success my-3">
            Your Review
          </label>
        </div>
        <div className="h-96 w-1/2 carousel carousel-vertical rounded-box">
          <div className="carousel-item p-5 h-full">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <div className="grid w-96  bg-base-300 place-items-center shadow-2xl">
                content
              </div>
            </div>
          </div>
          <div className="carousel-item p-5 h-full">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <div className="grid w-96  bg-base-300 place-items-center shadow-2xl">
                content
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <input type="checkbox" id="reviwe-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-neutral text-neutral-content">
          <h3 className="text-lg font-bold">Give your valuable review</h3>
          <div className="flex justify-center py-5">
            <div className="form-control  w-full max-w-xs">
              <select className="select bg-neutral text-neutral-content select-bordered">
                <option disabled selected>
                  Choose your review option
                </option>
                <option>2 stars</option>
                <option>3 stars</option>
                <option>4 stars</option>
                <option>5 stars</option>
              </select>
              <button className="btn btn-sm btn-info my-2">Submit</button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="reviwe-modal">
          Close
        </label>
      </div>
    </div>
  );
};

export default StudentReview;
