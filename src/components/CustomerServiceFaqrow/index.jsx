import React, { useState } from "react";

import { Img, Text } from "components";

const CustomerServiceFaqrow = ({ className, category, title, content }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={className}>
        <div
          className="flex flex-row
                    items-center justify-between w-full"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <div className="flex flex-row flex-grow gap-2.5 items-center justify-start w-auto">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] font-bold"
              size="txtInterMedium16Black900"
            >
              [{category}]
            </Text>
            <Text
              className="text-base text-black-900 tracking-[-0.30px]"
              size="txtInterMedium16Black900"
            >
              {title}
            </Text>
          </div>
          <Img
            className="h-8 md:h-auto object-cover w-8"
            src="images/img_down11_32x32.png"
            alt="downEleven"
          />
        </div>
        <div
          className={`bg-gray-200 w-full px-2 overflow-hidden duration-300
                    ${
                      isOpen ? "h-auto opacity-100 my-2 py-2" : "h-0 opacity-0"
                    }`}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default CustomerServiceFaqrow;
