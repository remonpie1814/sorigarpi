import React from "react";

import { Img, List, Text } from "components";

const MainTaleColumn = ({ className, images }) => {
  return (
    <>
      <List className={className} orientation="horizontal">
        {images && images.length > 0 && (
          <>
            <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              {images.slice(0, 3).map((image, index) => {
                return (
                  <>
                    <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
                      <Img
                        key={"imageColumn1" + index}
                        className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                        src={image}
                        alt="Taleimage"
                      />
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              {images.slice(3, 6).map((image, index) => {
                return (
                  <>
                    <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
                      <Img
                        key={"imageColumn2" + index}
                        className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                        src={image}
                        alt="Taleimage"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </List>
    </>
  );
};

export { MainTaleColumn };
