import React, { useState } from "react";

import { Button, Img, List, Text, Layout, TabButton } from "components";
import FollowUserRow from "components/FollowUserRow";
import FollowerUserRow from "components/FollowerUserRow";

const FollowListPage = () => {
  const [followList, setFollowList] = useState([
    { id: "1", name: "팔로우2", profileImg: "/images/img_ellipse4.png" },
    { id: "2", name: "콩림이", profileImg: "/images/img_ellipse4_100x100.png" },
    { id: "3", name: "콩솔이", profileImg: "/images/img_ellipse4.png" },
  ]);
  const [followerList, setFollowerList] = useState([]);

  const [tab, setTab] = useState(0);
  // todo: 팔로우 삭제 버튼 함수
  function handleDeleteFollow(id) {
    console.log(id + "를 팔로우에서 삭제");
    setFollowList(followList.filter((item) => item.id != id));
  }

  // todo: 팔로워 삭제 버튼 함수
  function handleDeleteFollower(id) {}

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
            {tab == 0 &&
              (followList.length > 0 ? (
                followList.map((item, index) => (
                  <React.Fragment key={`Followuserrow${index}`}>
                    <FollowUserRow
                      className="flex flex-row items-center justify-center flex-1 w-full gap-5 my-0 sm:flex-col"
                      deleteFollow={() => {
                        handleDeleteFollow(item.id);
                      }}
                      {...item}
                    />
                  </React.Fragment>
                ))
              ) : (
                <>팔로우한 작가가 없어요!</>
              ))}
            {tab == 1 &&
              (followerList.length > 0 ? (
                followerList.map((item, index) => {
                  return (
                    <React.Fragment key={`FollowerUserRow${index}`}>
                      <FollowerUserRow
                        className="flex flex-row items-center justify-center flex-1 w-full gap-5 my-0 sm:flex-col"
                        deleteFollow={() => {
                          handleDeleteFollower(item.id);
                        }}
                        {...item}
                      />
                    </React.Fragment>
                  );
                })
              ) : (
                <>작가님을 팔로우한 사람이 없어요</>
              ))}
          </List>
        </div>
      </Layout>
    </>
  );
};

export default FollowListPage;
