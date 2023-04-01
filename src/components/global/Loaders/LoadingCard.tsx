import React from "react";
import "./LoadingCard.css";

const LoadingCard = () => {
  return (
    <div className="loading-card p-4 w-full h-60 flex items-center">
      <div className="loading-image w-1/2 h-full bg-gray-500 rounded-md"></div>
      <div className="loading-content flex flex-col ml-4 w-1/2">
        <div className="loading-title w-full h-8 bg-gray-400 rounded"></div>
        <div className="loading-text mt-1 w-1/2 h-4 bg-gray-400 rounded"></div>
        <div className="loading-text mt-1 w-2/3 h-4 bg-gray-400 rounded"></div>
        <div className="loading-text mt-1 w-full h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingCard;