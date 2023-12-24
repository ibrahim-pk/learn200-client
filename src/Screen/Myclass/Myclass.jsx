/* eslint-disable react/jsx-key */
import { useState } from "react";
import ReactPlayer from "react-player";

const Myclass = () => {
  const [videoUrl, setVideoUrl] = useState("https://youtu.be/gfrmLEHAUG8");
  const [title, setTitle] = useState("Introduce Html part1");
  const videoDetails = [
    {
      class: "1",
      title: "Introduce Html part1",
      video: "https://youtu.be/gfrmLEHAUG8",
    },
    {
      class: "2",
      title: "Html Live Class Part1",
      video: "https://youtu.be/U0X8mifKgEs",
    },
    {
      class: "3",
      title: "Html Live Class Part2",
      video: "https://youtu.be/s5FoZZJAAvM",
    },
    {
      class: "4",
      title: "CSS Live Class Part2",
      video: "https://youtu.be/IFu_W0F8a74",
    },
  ];
  const handleVideo = (data) => {
    setTitle(data.title);
    setVideoUrl(data.video);
  };
  return (
    <div className="bg-neutral text-neutral-content pt-2 pb-20">
      <div>
        <h2 className="text-center text-2xl py-5">
          Welcome Web Development Course
        </h2>
      </div>
      <div className="flex justify-center gap-10">
        <div>
          <ReactPlayer light={true} controls={true} url={videoUrl} />
          <h2 style={{ cursor: "pointer" }} className="text-xl my-3">
            <i className="fas mr-2 fa-video"></i>
            {title}
          </h2>
        </div>
        <div className="overflow-y-auto h-full">
          {videoDetails.map((res, idx) => (
            <div key={idx} className="card shadow-2xl p-5">
              <h2 onClick={() => handleVideo(res)}>
                Class {res.class} : {res.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myclass;
