import FreeContent from "../../Component/FreeContent/FreeContent";
import AboutCourse from "../Announcement.jsx/AboutCourse";
import AnnouceCard from "../Announcement.jsx/AnnouceCard";
import Faq from "../Faq/Faq";
import CarouselSlice from "../Slice/CarouselSlice";
import StudentReview from "../StudentReview/StudentReview";

const HomeScreen = () => {
  return (
    <div>
      <CarouselSlice />
      <AnnouceCard />
      <AboutCourse />
      <Faq />
      <StudentReview />
      <FreeContent />
    </div>
  );
};

export default HomeScreen;
