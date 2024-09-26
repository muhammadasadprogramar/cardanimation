import React, { useRef } from "react";
import Cards from "./Cards";

const Forground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem iptrsum door sit amet ipsum dor yes sit elit.amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem iptrsum door sit amet ipsum dor yes sit elit.amet, consectetur adipisicing.",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Lorem iptrsum door sit amet ipsum dor yes sit elit.amet, consectetur adipisicing.",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="w-full h-full p-5 fixed top-0 left-0 z-[3] flex gap-8 flex-wrap">
      {data.map((item, index) => (
        <Cards key={index} data={item} referance={ref}/>
      ))}
    </div>
  );
};

export default Forground;
