import React from "react";

const Bootstrap = ({ size }) => {
  return (
    <svg
      className={size ? size : "h-6"}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="26"
      fill="none"
      viewBox="0 0 32 26">
      <g clipPath="url(#clip0_556_2)">
        <path
          fill="#938FB1"
          fillRule="evenodd"
          d="M6.646.003C4.821.003 3.47 1.601 3.53 3.334c.058 1.665-.017 3.822-.56 5.58-.545 1.764-1.466 2.882-2.97 3.025v1.62c1.504.143 2.425 1.26 2.97 3.024.543 1.759.618 3.915.56 5.58-.06 1.733 1.29 3.332 3.117 3.332h18.709c1.826 0 3.177-1.599 3.116-3.332-.058-1.665.017-3.821.56-5.58.545-1.764 1.464-2.881 2.968-3.024v-1.62c-1.504-.144-2.423-1.26-2.968-3.025-.543-1.758-.618-3.915-.56-5.58.06-1.733-1.29-3.33-3.116-3.33H6.646zm15.049 15.692c0 2.386-1.78 3.834-4.734 3.834h-5.029a.542.542 0 01-.542-.543V6.512a.542.542 0 01.542-.543h5c2.463 0 4.08 1.334 4.08 3.383 0 1.438-1.088 2.725-2.473 2.95v.075c1.886.207 3.156 1.514 3.156 3.318zm-5.282-8.007h-2.868v4.05h2.415c1.867 0 2.896-.751 2.896-2.095 0-1.26-.885-1.955-2.444-1.955zm-2.868 5.657v4.464h2.973c1.944 0 2.973-.78 2.973-2.246s-1.058-2.218-3.098-2.218h-2.848z"
          clipRule="evenodd"></path>
      </g>
      <defs>
        <clipPath id="clip0_556_2">
          <path fill="#fff" d="M0 0H32V25.498H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bootstrap;
