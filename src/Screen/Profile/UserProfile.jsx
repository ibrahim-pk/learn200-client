import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="bg-neutral text-white">
      <div className="flex gap-10 mx-10 justify-center">
        <div className="card  p-4 w-1/5 bg-neutral shadow-2xl">
          <div className="flex justify-center">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">40%</span>
              <div className="grid">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "40",
                    "--size": "5rem",
                    "--thickness": "3px",
                  }}
                >
                  <h1 className="text-5xl my-5">
                    <i className="fas fa-user-circle"></i>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <ul className="menu menu-vertical px-1">
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                <Link>Education</Link>
              </li>
              <li>
                <Link>Job Profile</Link>
              </li>
              <li>
                <Link>Important Info</Link>
              </li>
              <li>
                <Link>Got Hired</Link>
              </li>
              <li>
                <Link>Certificate</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card w-3/5 bg-neutral p-4 shadow-2xl">
          <h1 className="my-2 text-2xl">My Profile</h1>
          <div className="flex justify-center gap-5">
            <div className="text-center w-1/5">
              <h1 className="text-5xl my-5">
                <i className="fas fa-user-circle"></i>
              </h1>
              <button className="btn btn-sm">Edit Profile</button>
            </div>
            <div className="w-3/4">
              <h1 className="my-2">
                <span>Student ID:</span> <br />
                <span className="text-xl"> AC342V874571X</span>
              </h1>
              <h1 className="my-2">
                <span>Full Name:</span> <br />
                <span className="text-xl">Md.Ibrahim Pk</span>
              </h1>
              <h1 className="my-2">
                <span>Email:</span> <br />
                <span className="text-xl">emonnstu14@gmail.com</span>
              </h1>
              <h1 className="my-2">
                <span>Phone:</span> <br />
                <span className="text-xl">01745672932</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
