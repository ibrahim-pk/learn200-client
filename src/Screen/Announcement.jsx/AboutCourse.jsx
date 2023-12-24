const AboutCourse = () => {
  return (
    <div className="bg-neutral py-10  text-neutral-content ">
      <h1 className="text-3xl my-10  text-center">About the course</h1>
      <div className="flex gap-10 justify-around max-w-screen-lg mx-auto">
        <div className="card p-5 w-full bg-neutral text-neutral-content shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl">
              <i className="fas mr-2 fa-camera-retro"></i>60+ Live Class
            </h1>
          </div>
        </div>
        <div className="card p-5 w-full bg-neutral text-neutral-content shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl">
              <i className="fas mr-2 fa-scroll"></i>20+ Project
            </h1>
          </div>
        </div>
        <div className="card p-5 w-full bg-neutral text-neutral-content shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl">
              <i className="far mr-2 fa-newspaper"></i>10+ Assignment
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto my-10">
        <h1 className="text-xl my-5">
          <i className="fas fa-check-circle mr-4"></i>
          Learn everything you need to become a web developer from one course.
        </h1>
        <h1 className="text-xl my-5">
          <i className="fas fa-check-circle mr-4"></i>
          You will start with HTML, CSS, Bootstrap, Tailwind. Then JavaScript,
          DOM, API, ES6, debugging, devtool, etc.
        </h1>
        <h1 className="text-xl my-5">
          <i className="fas fa-check-circle mr-4"></i>
          Enter the world of React, React Router, hooks, context api, Tanstack
          query, recharts, etc.
        </h1>
        <h1 className="text-xl my-5">
          <i className="fas fa-check-circle mr-4"></i>
          Explore server side technology like Node, express, mongodb. Build
          secure API using JWT tokens.
        </h1>
        <h1 className="text-xl my-5">
          <i className="fas fa-check-circle mr-4"></i>A fun and engaging
          learning strategy development by Programming Hero from years of
          experience will guide you to finish all these.
        </h1>
      </div>
    </div>
  );
};

export default AboutCourse;
