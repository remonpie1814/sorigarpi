//** 외곽선 없앰 */

import React, { useState } from "react";

import { Img } from "components";
import PageDrawer from "drawers/Page";

const MainHeader = (props) => {
  const [isOpenPageDrawer, setPageDrawer] = useState(false);
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-[64%] md:w-full md:gap-10">
          <div className="flex flex-col items-center justify-center w-auto">
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="/images/img__51x170.png"
              alt="sorigalpi logo"
            />
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center py-2.5 w-auto">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="/images/img_bell111.png"
              alt="bell button"
            />
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="/images/img_search111.png"
              alt="search button"
            />
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="/images/img_menu11.png"
              alt="menu button"
              onClick={() => {
                setPageDrawer(true);
              }}
            />
            {isOpenPageDrawer}
          </div>
        </div>
      </div>
      {isOpenPageDrawer ? (
        <PageDrawer
          open={isOpenPageDrawer}
          onClose={() => setPageDrawer(false)}
        />
      ) : null}
    </>
  );
};

export { MainHeader };
