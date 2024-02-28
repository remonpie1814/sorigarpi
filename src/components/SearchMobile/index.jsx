import React from "react";

import { Img } from "components";

const SearchMobile = ({ setSearch }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-40 hidden sm:block bg-white-A700 sm:h-full">
        <div className="flex flex-row items-start justify-start gap-4 p-5">
          <Img
            className="flex flex-row w-[21px] my-auto"
            src="images/img_image938.png"
            alt="image938"
            onClick={() => {
              setSearch(false);
            }}
          />
          <form className="flex flex-row items-center justify-start h-[46px] w-full">
            <input
              className="w-full h-full border-0 bg-blue_gray-50"
              type="text"
              placeholder="작품, 작가 검색"
              name=""
              id=""
            />
            <button className="bg-amber-A100 flex flex-col h-[46px] items-center justify-start p-1 rounded-r-lg">
              <Img
                className="w-[46px] md:h-auto object-cover"
                src="images/img_image926.png"
                alt="image926"
              />
            </button>
          </form>
        </div>
        <div className="h-full"></div>
      </div>
    </>
  );
};
export { SearchMobile };
