import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="fixed inset-0 -z-50 flex items-center justify-center bg-gray-100">
      <div className="w-30 h-30  animate-spin">
        <ThreeCircles
          visible={true}
          height="60"
          width="60"
          color="#1F8F5B"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default Loader;
