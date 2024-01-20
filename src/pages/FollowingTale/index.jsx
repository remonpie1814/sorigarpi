import React from "react";

import { Button, Img, Layout, Text } from "components";
import FollowingTaleColumnonehundredthree from "components/FollowingTaleColumnonehundredthree";

const FollowingTalePage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <FollowingTaleColumnonehundredthree className="flex flex-col gap-10 items-center justify-start max-w-[1180px] pb-[60px] pt-[30px] w-full" />
        </div>
      </Layout>
    </>
  );
};

export default FollowingTalePage;
