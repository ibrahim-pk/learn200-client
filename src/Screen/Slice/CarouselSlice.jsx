import { TypeAnimation } from "react-type-animation";
import { Carousel } from "react-responsive-carousel";
const CarouselSlice = () => {
  return (
    <div className="bg-neutral   text-neutral-content">
      <div className="slideItem">
        <div className="w-1/3">
          <div className="text-center mb-4">
            <i className="fab fa-5x fa-connectdevelop fa-spin"></i>
          </div>
          <TypeAnimation
            sequence={[
              "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
              1000,
              "Programming isn’t about what you know, it’s about what you can figure out.",
              1000,
            ]}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="w-1/2">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            showArrows={false}
            interval={2000}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            <div className="caroImg">
              <img src="/image/header1.png" />
            </div>
            <div className="caroImg">
              <img src="/image/header2.png" />
            </div>
            <div className="caroImg">
              <img src="/image/header3.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlice;
