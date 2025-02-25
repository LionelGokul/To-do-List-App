const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full flex justify-center items-center">
        <svg
          fill="#ffffff"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transform -rotate-45"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M2.67 10.73a3.52 3.52 0 0 0-.94 1.93 5 5 0 0 0-.07 1.1v.58h.8a5.05 5.05 0 0 0 .88-.08 3.46 3.46 0 0 0 1.93-.94 1.76 1.76 0 0 0-.14-2.48 1.76 1.76 0 0 0-2.46-.11zm1.74 1.73a2.26 2.26 0 0 1-1.26.6h-.22v-.22a2.26 2.26 0 0 1 .6-1.26.36.36 0 0 1 .24-.08.67.67 0 0 1 .47.22.54.54 0 0 1 .17.74zM14.65 2.24a.91.91 0 0 0-.89-.89A8.75 8.75 0 0 0 7.27 3.5L5.64 5.4l-2.4-.5a1 1 0 0 0-.92.27l-.68.68a1 1 0 0 0-.28.81 1 1 0 0 0 .45.74l2.06 1.32.13.08 3.2 3.25.08.08 1.32 2.06a1 1 0 0 0 .74.45h.11a1 1 0 0 0 .7-.29l.68-.68a1 1 0 0 0 .27-.92l-.5-2.39 1.84-1.58a8.79 8.79 0 0 0 2.21-6.54zM3.11 6.15l1.32.28-.64.75-1-.67zm6.38 7.1-.67-1 .75-.64.28 1.32zm2.39-5.11.18.17zm-.28-.28L7.92 11 5 8.08 8.14 4.4a7.44 7.44 0 0 1 5.26-1.8 7.48 7.48 0 0 1-1.8 5.26z"></path>
            <path d="M11.13 6.63a1.19 1.19 0 0 0-.06-1.7 1.16 1.16 0 1 0-1.64 1.63 1.2 1.2 0 0 0 1.7.07z"></path>
          </g>
        </svg>
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-extrabold">
          <span className="text-blue-500">Todo</span>{" "}
          <span className="text-purple-500">App</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
