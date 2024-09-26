import React from "react";

const Background = () => {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <nav className="flex justify-center text-xl absolute top-[5%] w-full py-10 text-zinc-400 font-semibold">
        Documents
      </nav>
      <h1 className="text-[14vw] text-zinc-400 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
