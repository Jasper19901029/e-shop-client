import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="w-[20px] h-[20px] animate-loading"></div>
      <p>Loading</p>
    </div>
  );
}
