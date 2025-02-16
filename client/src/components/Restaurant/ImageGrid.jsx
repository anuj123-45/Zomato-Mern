import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
  return (
    <>
      {/* Mobile View */}
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images?.[0]?.location || "fallback-image.jpg"}
          alt="Restaurant"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full h-96 gap-1">
        {/* Main Image */}
        <div className="w-full h-full overflow-hidden">
          <img
            src={props.images?.[0]?.location || "fallback-image.jpg"}
            alt="Restaurant"
            className="w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110"
          />
        </div>

        {/* Two Smaller Images */}
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <img
            src={props.images?.[1]?.location || "fallback-image.jpg"}
            alt="Restaurant"
            className="w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110"
          />
          <img
            src={props.images?.[2]?.location || "fallback-image.jpg"}
            alt="Restaurant"
            className="w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110"
          />
        </div>

        {/* Gallery and Add Photos Section */}
        <div className="w-1/4 h-full flex flex-col gap-1">
          {/* View Gallery */}
          <div className="w-full h-full relative">
            <img
              src={props.images?.[3]?.location || "fallback-image.jpg"}
              alt="Restaurant"
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <h4 className="text-white text-lg font-semibold">View Gallery</h4>
            </div>
          </div>

          {/* Add Photos */}
          <div className="w-full h-full relative">
            <img
              src={props.images?.[4]?.location || "fallback-image.jpg"}
              alt="Restaurant"
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gray-400 bg-opacity-90 rounded-lg flex flex-col items-center justify-center">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera className="text-white text-xl" />
              </div>
              <h4 className="text-white mt-2">Add Photos</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
