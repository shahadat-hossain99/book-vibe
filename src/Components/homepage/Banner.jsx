import React from "react";
import HeroImg from "../../assets/hero_img.jpg";
import { FaHandPointRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 rounded-2xl my-8 min-h-[70vh] container mx-auto shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between items-center">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Books To Freshen Up <br /> Your BookShelf{" "}
            </h1>

            <button className="btn btn-success mt-5 text-white font-semibold">
              <FaHandPointRight /> View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
