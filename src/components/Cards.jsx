import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = ({ data, referance }) => {
  return (
    <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="w-56 flex-shrink-0 relative h-64 rounded-[30px] bg-slate-600 overflow-hidden text-white px-5 py-7">
      <FaRegFileAlt />
      <p className="text-sm leading-tight font-semibold mt-5">{data.desc}</p>
      <div className="w-full absolute bottom-0 left-0">
        <div className="flex py-3 items-center justify-between mb-3 px-5">
          <h5 className="text-lg">{data.filesize}</h5>
          <span className={`p-2 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-400"} rounded-full cursor-pointer text-sm`}>
            {data.close ? <IoCloseSharp /> : <FaDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-green-400" : "bg-blue-500"} flex items-center justify-center`}>
            <h3>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
