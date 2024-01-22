import React, { useState } from "react";

import { Button, Img, Layout, List, Text } from "components";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [taleList, setTaleList] = useState([
    { image: "images/img_image917.png", id: "" },
    { image: "images/img_image917.png", id: "" },
    { image: "images/img_image917.png", id: "" },
    { image: "images/img_image917.png", id: "" },
    { image: "images/img_image917.png", id: "" },
    { image: "images/img_image917.png", id: "" },
  ]);
  const [userInfo, setUserInfo] = useState({
    profileImage: "images/img__120x120.png",
    name: "현진",
    following: 30,
    follower: 40,
  });
  const isMyProfile = true;
  let navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[720px] pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            프로필
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[140px] items-center justify-center w-full">
            <Img
              className="h-[120px] md:h-auto object-cover w-[120px]"
              src={userInfo.profileImage}
              alt="프로필 이미지"
            />
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900"
            >
              {userInfo.name}
            </Text>

            <div className="flex flex-col gap-2 items-center justify-center w-auto">
              <Text
                className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                팔로워
              </Text>
              <Text
                className="text-base text-center text-gray-900 tracking-[-0.18px]"
                size="txtInterMedium16Gray900"
              >
                {userInfo.follower}
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center w-auto">
              <Text
                className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                팔로잉
              </Text>
              <Text
                className="text-base text-center text-gray-900 tracking-[-0.18px]"
                size="txtInterMedium16Gray900"
              >
                {userInfo.following}
              </Text>
            </div>
          </div>

          {
            // 만약 자기 거면 프로필 수정 버튼, 아니라면 팔로우 버튼을 표시
            isMyProfile ? (
              <Button
                className="cursor-pointer font-medium min-w-[137px] rounded-[10px] text-base text-center tracking-[-0.30px]"
                color="amber_A100"
                size="md"
                variant="fill"
              >
                프로필 수정
              </Button>
            ) : (
              <Button
                className="cursor-pointer font-medium min-w-[137px] rounded-[10px] text-base text-center tracking-[-0.30px]"
                color="amber_A100"
                size="md"
                variant="fill"
              >
                팔로우
              </Button>
            )
          }

          <div className="md:h-[150px] h-[196px] py-[23px] relative w-full">
            <div className="bg-gray-300 h-[150px] m-auto p-2 w-full">
              <Text
                className="text-base text-black-900 tracking-[-0.30px]"
                size="txtInterMedium16Black900_1"
              >
                자기소개
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between py-[3px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.31px]"
              size="txtInterMedium28Gray900"
            >
              내 책장
            </Text>
            {/* 전체 보기를 눌렀을 때는 남의 거라면 검색 결과 페이지로 이동(필요 정보를 쿼리로 전달)  */}
            <div
              className="flex flex-row items-center justify-start w-auto"
              onClick={() => {
                isMyProfile
                  ? navigate("/MyLibrary")
                  : navigate(`/SearchResult?user=${userInfo.name}`);
              }}
            >
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                전체 보기
              </Text>
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_down11.png"
                alt="downEleven"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="gap-[60px] md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center
                        min-h-[auto] w-full"
            >
              {taleList.map((tale, index) => {
                return (
                  <div
                    className="flex flex-1 flex-col
                              items-center justify-start pb-1.5
                              w-full"
                  >
                    <Img
                      className="border border-black-900 border-solid
                                w-[150px] h-[200px]
                                md:h-auto object-cover rounded-[20px]"
                      src={tale.image}
                      alt="동화 이미지"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
