import React from "react";

import { Img, List, Text } from "components";

const Listtwohundredfiftyone = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 h-[200px] md:h-auto items-start justify-between w-full">
          <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917"
            />
          </div>
          <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917_One"
            />
          </div>
          <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917_Two"
            />
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
          <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917"
            />
          </div>
          <div className="border border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917_One"
            />
          </div>
          <div className="border border-black-900 border-solid pb-1.5 relative rounded-[20px] w-[27%] sm:w-full">
            <Img
              className="h-[194px] m-auto object-cover rounded-[20px] w-full"
              src="images/img_image917.png"
              alt="image917_Two"
            />
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24WhiteA700"
            >
              {props?.twohundredfiftyone}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

Listtwohundredfiftyone.defaultProps = { twohundredfiftyone: <>&gt;</> };

export default Listtwohundredfiftyone;
