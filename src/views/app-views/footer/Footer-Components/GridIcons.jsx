import React from "react";

const GridIcons = ({ options }) => {
  return (
    <div className="flex gap-2 text-[#4e4e4e] ">
      {options.map((e) => {
        return (
          <a href={e.Link} key={e.Link}>
            <div
              className="hover:text-[#666] cursor-pointer"
              dangerouslySetInnerHTML={{ __html: e.Icon }}
            ></div>
          </a>
        );
      })}
    </div>
  );
};

export default GridIcons;
