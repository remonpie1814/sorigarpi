import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Layout, Text } from "components";

const ProfilePictureModifyFormPage = () => {
  const navigate = useNavigate();
  const [checkedImage, setCheckedImage] = useState(-1);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] h-[875px] md:h-auto items-center justify-start max-w-[1180px] pb-5 pt-[30px] w-full">
            <Text
              className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              내 프로필 사진 수정
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-center w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 h-[500px] md:h-auto items-center justify-center px-5 w-[500px] sm:w-full">
                <div
                  className="bg-white-A700 gap-2.5 grid grid-cols-3 sm:grid-cols-1
                            items-center w-[480px] sm:w-full h-[480px]
                            p-5
                            overflow-y-auto overflow-x-clip"
                >
                  {Array(14)
                    .fill("images/img_profile1.png")
                    .map((image, index) => {
                      return (
                        <div className="relative">
                          <div
                            className={`absolute w-full h-full bg-black-900 bg-opacity-50
                            flex text-center items-center justify-center z-10 pointer-events-none
                            ${
                              checkedImage == index
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            <span className="text-xl">✅</span>
                          </div>
                          <Img
                            className={`h-[132px] md:h-auto object-cover 
                                    ${
                                      checkedImage == index
                                        ? "opacity-50"
                                        : "transition duration-300 hover:scale-110 hover:shadow-lg"
                                    }`}
                            onClick={() => {
                              checkedImage == index
                                ? setCheckedImage(-1)
                                : setCheckedImage(index);
                            }}
                            src={image}
                            alt="profile"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[184px] text-base text-center tracking-[-0.18px]"
                  onClick={() => navigate("/profilemodifyform")}
                  shape="round"
                  color="blue_gray_100_02"
                  size="lg"
                  variant="fill"
                >
                  취소
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[184px] text-base text-center tracking-[-0.18px]"
                  onClick={() => navigate("/profilemodifyform")}
                  shape="round"
                  color="amber_A100"
                  size="lg"
                  variant="fill"
                >
                  확인
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePictureModifyFormPage;
