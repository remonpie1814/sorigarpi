import React from "react";

import { Img } from "components";

const Scrollbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[7px] mt-1 w-[7px]"
          src="images/img_bag.svg"
          alt="bag"
        />
        <div className="bg-gray-400_02 h-[25px] w-full"></div>
        <Img
          className="h-[7px] mb-1 mt-[448px] w-[7px]"
          src="images/img_bag.svg"
          alt="bagone"
        />
      </div>
    </>
  );
};

Scrollbar.defaultProps = {};

export default Scrollbar;
