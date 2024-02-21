import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const PageDrawer = (props) => {
  return (
    <Drawer placement="left" className="!w-[480px] sm:w-full" {...props}>
      <div>
        <div
          className="flex flex-col font-inter items-start justify-start 
                    mx-auto h-screen sm:w-full md:w-full"
        >
          <Sidebar1
            className="bg-white-A700 flex flex-col 
                      items-start justify-start px-5
                      h-full w-full"
            onClose={props.onClose}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default PageDrawer;
