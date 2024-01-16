import React from "react";

import { Img } from "components";

const SearchResultHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[64%] md:w-full">
          <div className="flex flex-col items-center justify-center w-auto">
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="images/img__51x170.png"
              alt="ThirtyEight"
            />
          </div>
          <div className="flex flex-row gap-2.5 items-start justify-start py-2.5 w-auto">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_bell111.png"
              alt="bell111"
            />
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_search111.png"
              alt="search111"
            />
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_menu11.png"
              alt="menuEleven"
            />
          </div>
        </div>
      </div>
    </>
  );
};

SearchResultHeader.defaultProps = {};

export default SearchResultHeader;
