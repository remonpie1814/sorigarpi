import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import ProfilePictureModifyFormScrollbar from "components/ProfilePictureModifyFormScrollbar";
import SearchResultHeader from "components/SearchResultHeader";
import Navbar from "components/Navbar";

const ProfilePictureModifyFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <SearchResultHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <Navbar className="flex flex-col items-center justify-start w-full" />
          <div className="flex flex-col gap-[30px] h-[875px] md:h-auto items-center justify-start max-w-[1180px] pb-5 pt-[30px] w-full">
            <Text
              className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28"
            >
              내 프로필 사진 수정
            </Text>
            <div className="flex flex-col gap-2.5 items-center justify-center w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 h-[500px] md:h-auto items-center justify-center px-5 w-[500px] sm:w-full">
                <div className="bg-white-A700 gap-2.5 grid sm:grid-cols-1 grid-cols-3 items-center min-h-[auto] w-[470px] sm:w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-full"
                    src="images/img_profile1.png"
                    alt="profile"
                  />
                </div>
                <ProfilePictureModifyFormScrollbar className="bg-blue_gray-50_01 flex flex-col items-center justify-start p-0.5 w-[4%] sm:w-full" />
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[184px] text-base text-center tracking-[-0.18px]"
                onClick={() => navigate("/profilemodifyform")}
                shape="round"
                color="amber_A100"
                size="lg"
                variant="fill"
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePictureModifyFormPage;
