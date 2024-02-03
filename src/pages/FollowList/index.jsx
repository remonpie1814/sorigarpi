import React, { useState } from "react";

import { Button, Img, List, Text, Layout, TabButton } from "components";
import FollowListFollowuserrow from "components/FollowListFollowuserrow";

const FollowListPage = () => {
  const followListFollowuserrowPropList = [
    {},
    { followtext: "팔로우2" },
    { followtext: "콩림이" },
    { followtext: "콩솔이" },
  ];

  const [tab, setTab] = useState(0);

  return (
    <>
      <Layout>
        <div className="border-b border-gray-300 border-solid flex flex-col gap-5 h-[603px] md:h-auto items-center justify-start max-w-[720px] pt-[30px] md:px-5 w-full">
          <div className="flex flex-row items-start justify-center w-full gap-20 border-b border-gray-300 border-solid sm:gap-10">
            <TabButton
              index={0}
              tab={tab}
              setTab={setTab}
              border={"border-amber-A100 border-b-[5px] border-solid"}
            >
              팔로우
            </TabButton>
            <TabButton
              index={1}
              tab={tab}
              setTab={setTab}
              border={"border-amber-A100 border-b-[5px] border-solid"}
            >
              팔로워
            </TabButton>
          </div>
          <List
            className="flex flex-col items-center w-full gap-5 pb-5 "
            orientation="vertical"
          >
            {followListFollowuserrowPropList.map((props, index) => (
              <React.Fragment key={`FollowListFollowuserrow${index}`}>
                <FollowListFollowuserrow
                  className="flex flex-row items-center justify-center flex-1 w-full gap-5 my-0 sm:flex-col"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Layout>
    </>
  );
};

export default FollowListPage;
