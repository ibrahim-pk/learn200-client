

const FreeContent = () => {
   const youtubeLink=" https://www.youtube.com/watch?v=DhRZh3G3PiA"
  const videoId = youtubeLink.split('v=')[1];

  return (
    <div className="bg-neutral text-center py-10 ">
      <h2 className="text-3xl font-bold text-white my-4">Free Resource</h2>
     {/* 1st */}
      <div className="md:flex gap-5  max-w-screen-xl mx-auto">
        <div className="card my-2 md:w-1/3 w-full   shadow-lg">
        <iframe
          title="Node and Git"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          className="h-64"
        ></iframe>
        </div>
       {/* 2nd */}
        <div className="card my-2 md:w-1/3 w-full  shadow-lg">
        <iframe
          title="Node and Git"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
         className="h-64"
        ></iframe>
        </div>
     {/* 3rd */}
        <div className="card my-2 md:w-1/3 w-full  shadow-lg">
        <iframe
          title="Node and Git"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          className="h-64"
        ></iframe>
        </div>
      </div>
      <button className="btn btn-ms btn-info">More</button>
    </div>
  );
};

export default FreeContent;
