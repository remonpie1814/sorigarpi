import React from "react";

import { Button, Text } from "components";

const MyLibraryPaging = ({
  className,
  currentPage,
  maxPage,
  setCurrentPage,
}) => {
  let pageArray = [];
  if (maxPage < 5) {
    pageArray = Array.from({ length: maxPage }, (_, i) => 1 + i);
  } else if (currentPage <= 3) {
    pageArray = [1, 2, 3, 4, 5];
  } else if (currentPage > maxPage - 2) {
    pageArray = [maxPage - 4, maxPage - 3, maxPage - 2, maxPage - 1, maxPage];
  } else {
    pageArray = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }

  return (
    <>
      <div className={className}>
        <div className="flex flex-row gap-[33px] items-center justify-center md:px-10 sm:px-5 px-[82px] py-2 w-auto">
          <Button
            className={`text-black-900 cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center 
                      sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]
                      ${
                        currentPage > 1
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
            shape="square"
            color="gray_300"
            size="md"
            variant="fill"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {"<"}
          </Button>
          {pageArray.map((page, index) => {
            return (
              <Button
                className={`text-[22px] font-bold
                sm:text-lg md:text-xl tracking-[-0.42px] w-[22px] 
                ${currentPage == page ? "text-amber-500" : "text-gray-600"}`}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </Button>
            );
          })}

          <Button
            className={`text-black-900 cursor-pointer font-inter font-medium
                        h-[49px] text-[22px] text-center
                        sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]
                        ${
                          currentPage < maxPage && maxPage > 1
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
            shape="square"
            color="gray_300"
            size="md"
            variant="fill"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {">"}
          </Button>
        </div>
      </div>
    </>
  );
};

MyLibraryPaging.defaultProps = {};

export default MyLibraryPaging;
