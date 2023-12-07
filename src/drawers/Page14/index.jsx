import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const Page14Drawer = (props) => {
  return (
    <Drawer placement="left" className="!w-[30%]" {...props}>
      <div>
        <div className="flex flex-col font-inter items-start justify-start mx-auto p-5 sm:w-full md:w-full">
          <Sidebar1 className="bg-white-A700 flex flex-col gap-2.5 h-[1040px] md:h-auto items-start justify-start px-5 py-2.5 w-full" />
        </div>
      </div>
    </Drawer>
  );
};

export default Page14Drawer;
