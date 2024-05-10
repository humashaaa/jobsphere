import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SwipperSlide = () => {
  return (
    <div className="w-full h-1/2 relative">
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[
            // Autoplay,
             Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className="relative">
         <img className="w-full h-[39rem]" src={banner1} alt="" />
          <div className="absolute top-40 left-96 text-center space-y-4 text-white">
            <h1 className="font-bold text-4xl">Unlock Your Career Potential:
            <br /> Explore Opportunities with JobSphere</h1>
            <p className="w-[45rem]">Embark on your career odyssey with JobSphere, where personalized guidance, comprehensive resources, and job opportunities converge to empower you towards professional  success.</p>
            <button>Explore now</button>
          </div>
         </div>

          
        </SwiperSlide>
        <SwiperSlide >
          <div className="relative">
          <img className="w-full h-[39rem]" src={banner2} alt="" />
          <div className="absolute top-40 left-96 text-center space-y-4 text-white">
            <h1 className="font-bold text-4xl">Empowering your career journey, <br />one opportunity at a time</h1>
            <p className="w-[45rem]">Discover a world of career possibilities with JobSphere, your all-in-one destination for personalized job recommendations, expert advice, and a seamless job search experience designed to empower you in realizing your professional aspirations.</p>
            <button>Explore now</button>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          <img className="w-full h-[39rem]" src={banner3} alt="" />
          <div className="absolute top-40 left-96 text-center space-y-4 text-white">
            <h1 className="font-bold text-4xl">Find your path to success <br />with JobSphere's tailored job search solutions</h1>
            <p className="w-[45rem]">JobSphere offers a dynamic platform where job seekers can access tailored support, expert guidance, and a diverse range of career opportunities, all aimed at facilitating their journey towards finding meaningful employment</p>
            <button>Explore now</button>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperSlide;
