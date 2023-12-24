import { motion } from "framer-motion";

const CourseDetails = () => {
  const courseData = {
    banner: "/image/webBanner.png",
    title: "Fronted Web Development",
    description: [
      "Learn React and TailwindCSS",
      "Build modern web applications",
      "Responsive design with TailwindCSS",
    ],
    review: 4.8,
    enrolledStudents: 1000,
    instructor: {
      image: "/image/ibrahim.jpg",
      rating: 4.9,
      about: "Passionate about teaching React and TailwindCSS",
      education: "Masters in Computer Science",
      jobPlacement: "Helped students land jobs at top tech companies",
      socialLinks: {
        twitter: "https://twitter.com/instructor",
        linkedin: "https://www.linkedin.com/in/instructor",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-neutral text-base-100">
      <motion.div
      className="p-4  max-w-screen-lg mx-auto"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      {/* First Row: Course Information */}
      <div className="card my-5 shadow-lg p-5">
        <div className="mb-8 sm:mb-0  sm:mr-8">
          <motion.img
            src={courseData.banner}
            alt="Course Banner"
            className="my-4 rounded-md w-full "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-2xl font-bold mb-2">{courseData.title}</h2>
          <ul className="list-disc ml-6 mb-4">
            {courseData.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mb-2">Rating: {courseData.review}</p>
          <p className="mb-2">
            Enrolled Students: {courseData.enrolledStudents}
          </p>
          <div className="flex items-center">
          <motion.button
            className="bg-blue-500 text-white p-2 my-2  rounded-md mr-4 w-full sm:w-auto"
            whileHover={{ scale: 1.1 }}
          >
            Enroll Now
          </motion.button>
          <motion.button
            className="px-4 my-3 py-2  mr-4"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fas fa-2x fa-heart"></i>
          </motion.button>
          </div>
        </div>
      </div>

      {/* Second Row: Instructor Information */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-5"
      >
        <div className="card shadow-lg p-5">
          <div className="flex gap-5">
            <div>
              <img
                src={courseData.instructor.image}
                alt="Instructor"
                className="w-50 h-50 rounded-full mb-4"
              />
            </div>
            <div>
              <p className="mb-2">Rating: {courseData.instructor.rating}</p>
              <p className="mb-2">{courseData.instructor.about}</p>
              <p className="mb-2">
                Education: {courseData.instructor.education}
              </p>
              <p className="mb-2">
                Job Placement: {courseData.instructor.jobPlacement}
              </p>
              <div className="mb-4">
                Social Links:
                <a
                  href={courseData.instructor.socialLinks.twitter}
                  className="ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href={courseData.instructor.socialLinks.linkedin}
                  className="ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default CourseDetails;
