import React, { useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Headingimg from "../Images/headerimg1.jpg";
import Headingimg2 from "../Images/headerimg2.jpg";
import Headingimg3 from "../Images/headerimg4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Carousel className="h-lvh">
        <div className="relative h-full w-full">
          <img
            src={Headingimg}
            alt="img1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 h-2/4  text-center md:w-2/4 relative z-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-2 lg:text-left w-full lg:text-xl md:text-start font-Oswald"
                data-aos="fade-up"
              >
                SHAPE YOUR BODY
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="text-3xl lg:text-left  md:text-5xl md:text-left lg:text-7xl font-Oswald"
                data-aos="fade-up"
              >
                BE{" "}
                <span
                  className="text-orange-800 font-Oswald"
                  data-aos="fade-up"
                >
                  STRONG
                </span>{" "}
                <br />{" "}
                <p className="pt-3 pb-9 font-Oswald" data-aos="fade-up">
                  TRAINING HARD
                </p>
              </Typography>
              <div className="flex lg:justify-start gap-2 justify-center ">
                <Link to={"/Contact"}>
                  <Button
                    size="lg"
                    color="white"
                    data-aos="fade-up"
                    className="font-Roboto"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to={"/Gallery"}>
                  <Button
                    size="lg"
                    color="white"
                    variant="outlined"
                    className="hover:bg-white hover:text-black font-Roboto"
                    data-aos="fade-up"
                  >
                    Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="absolute inset-0 polygon"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                clipPath:
                  "polygon(0px 0px, 21% 0px, 196.48vh 204.67vh, 0.46% 204.54vh)",
              }}
            ></div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Headingimg2}
            alt="img1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 h-2/4  text-center md:w-2/4 relative z-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-2 lg:text-left w-full lg:text-xl md:text-start"
                data-aos="fade-up"
              >
                SHAPE YOUR BODY
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="text-3xl lg:text-left  md:text-5xl md:text-left lg:text-7xl"
                data-aos="fade-up"
              >
                BE{" "}
                <span className="text-orange-800" data-aos="fade-up">
                  STRONG
                </span>{" "}
                <br />{" "}
                <p className="pt-3 pb-9" data-aos="fade-up">
                  TRAINING HARD
                </p>
              </Typography>
              <div className="flex lg:justify-start gap-2 justify-center">
                <Link to={"/Contact"}>
                  <Button size="lg" color="white" data-aos="fade-up">
                    Contact Us
                  </Button>
                </Link>
                <Link to={"/Gallery"}>
                  <Button
                    size="lg"
                    color="white"
                    variant="outlined"
                    className="hover:bg-white hover:text-black"
                    data-aos="fade-up"
                  >
                    Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="absolute inset-0 polygon"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                clipPath:
                  "polygon(0px 0px, 21% 0px, 196.48vh 204.67vh, 0.46% 204.54vh)",
              }}
            ></div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src={Headingimg3}
            alt="img1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 h-2/4  text-center md:w-2/4 relative z-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-2 lg:text-left w-full lg:text-xl md:text-start"
                data-aos="fade-up"
              >
                SHAPE YOUR BODY
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="text-3xl lg:text-left  md:text-5xl md:text-left lg:text-7xl"
                data-aos="fade-up"
              >
                BE{" "}
                <span className="text-orange-800" data-aos="fade-up">
                  STRONG
                </span>{" "}
                <br />{" "}
                <p className="pt-3 pb-9" data-aos="fade-up">
                  TRAINING HARD
                </p>
              </Typography>
              <div className="flex lg:justify-start gap-2 justify-center">
                <Link to={"/Contact"}>
                  <Button size="lg" color="white" data-aos="fade-up">
                    Contact Us
                  </Button>
                </Link>
                <Link to={"/Gallery"}>
                  <Button
                    size="lg"
                    color="white"
                    variant="outlined"
                    className="hover:bg-white hover:text-black"
                    data-aos="fade-up"
                  >
                    Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="absolute inset-0 polygon"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                clipPath:
                  "polygon(0px 0px, 21% 0px, 196.48vh 204.67vh, 0.46% 204.54vh)",
              }}
            ></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
