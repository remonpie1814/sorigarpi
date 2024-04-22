import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const PageDrawer = (props) => {
  return (
    <Drawer placement="right" className="!w-[480px] sm:w-full" {...props}>
      <div>
        <div className="flex flex-col items-start justify-start h-screen mx-auto font-inter sm:w-full md:w-full">
          <Sidebar1
            className="flex flex-col items-start justify-start w-full h-full px-5 bg-white-A700"
            onClose={props.onClose}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default PageDrawer;
