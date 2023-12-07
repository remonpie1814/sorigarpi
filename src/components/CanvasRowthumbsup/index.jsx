import React from "react";

import { Img } from "components";

const CanvasRowthumbsup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[900px] md:h-auto items-center justify-start px-5 w-[540px] sm:w-full">
          <div className="bg-black-900_99 flex flex-col items-center justify-start rounded-[12px] w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[78px] md:h-auto object-cover w-[77px]"
                    src="images/img_image683.png"
                    alt="image683"
                  />
                  <Img
                    className="h-[85px] md:h-auto object-cover"
                    src="images/img_image682.png"
                    alt="image682"
                  />
                  <Img
                    className="h-[65px] md:h-auto object-cover"
                    src="images/img_image686.png"
                    alt="image686"
                  />
                  <Img
                    className="h-[66px] md:h-auto object-cover"
                    src="images/img_image685.png"
                    alt="image685"
                  />
                </div>
                <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image655.png"
                    alt="image691"
                  />
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image656.png"
                    alt="image691one"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] rotate-[-90deg] w-[55px]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
          />
          <Img
            className="h-[43px] w-[29px]"
            src="images/img_television.svg"
            alt="television"
          />
          <Img
            className="h-[33px] w-[45px]"
            src="images/img_user.svg"
            alt="user"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image754.png"
            alt="image754"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_icons8241.png"
            alt="icons8241"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image764.png"
            alt="image764"
          />
          <Img
            className="h-[55px] md:h-auto object-cover w-[30px]"
            src="images/img_image769.png"
            alt="image769"
          />
        </div>
      </div>
    </>
  );
};

CanvasRowthumbsup.defaultProps = {};

export default CanvasRowthumbsup;
