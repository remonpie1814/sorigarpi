import React from "react";

import { Img, Text } from "components";

const EditRecordPagebuttons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-auto">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_image689_30x30.png"
            alt="image655"
          />
          <Text
            className="text-base text-center text-gray-900 w-auto"
            size="txtInterMedium16"
          >
            {props?.fourhundredsixtyone}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
            size="txtInterBold22"
          >
            {props?.p2530}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_image690_30x30.png"
            alt="image656"
          />
          <Text
            className="text-base text-center text-gray-900 w-auto"
            size="txtInterMedium16"
          >
            {props?.fourhundredsixtytwo}
          </Text>
        </div>
      </div>
    </>
  );
};

EditRecordPagebuttons.defaultProps = {
  fourhundredsixtyone: "이전",
  p2530: "25 / 30",
  fourhundredsixtytwo: "다음",
};

export default EditRecordPagebuttons;
