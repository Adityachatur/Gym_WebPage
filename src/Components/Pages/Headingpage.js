import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HeadingPage = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${props.img})`,
  };

  return (
    <div>
      <div
        className="relative flex items-center justify-center bg-cover bg-center h-96"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="text-center text-white relative z-10 ">
        
          <h1 className="lg:text-5xl md:text-2xl text-xl uppercase font-bold mb-4 font-Oswald">
            {props.title}
          </h1>

          {/* Breadcrumb Navigation */}
          <p className="text-xl text-gray-400 uppercase flex space-x-3 justify-center font-Montserrat">
            <Link to={"/"}>Home</Link>
            <span>
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
            <span className="text-orange-800 font-Montserrat">{props.ThisPage}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingPage;
