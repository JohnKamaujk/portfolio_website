import React from "react";

const Italanta = ({ size }) => {
  return (
    <svg
      className={size ? size : "h-10"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <rect width="40" height="40" fill="#fff" rx="20"></rect>
      <path fill="url(#pattern0)" d="M5 9H35V30.085H5z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="scale(.00258 .00368)"
            xlinkHref="#image0_702_220"
          ></use>
        </pattern>
        {/* <image
          id="image0_702_220"
          width="387"
          height="272"
          xlinkHref=".../"
        ></image> */}
      </defs>
    </svg>
  );
};

export default Italanta;
