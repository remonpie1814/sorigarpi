import React from "react";

import { Button, Img, Layout, Text } from "components";
import { useNavigate } from "react-router-dom";

const InquiryFormPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <form className="flex flex-col gap-10 items-start justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px]"
            size="txtInterMedium28Gray900"
          >
            1:1 문의내역
          </Text>
          <div className="flex flex-row gap-[11px] items-center justify-start w-auto sm:w-full">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px]"
              size="txtInterMedium16Black900"
            >
              분류
            </Text>
            <div
              className="flex flex-row items-center justify-start
                        rounded-[5px] w-auto"
            >
              <div className="flex flex-row justify-start items-center md:w-full">
                <select
                  className="w-auto min-w-[120px] bg-blue_gray-100 p-2"
                  name="category"
                  id=""
                >
                  <option value="">회원가입</option>
                  <option value="">그림</option>
                  <option value="" selected>
                    기타
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px]"
              size="txtInterMedium16Black900"
            >
              내용
            </Text>
            <textarea className="bg-gray-100_01 h-[352px] w-full resize-none"></textarea>
          </div>
          <Text
            className="text-base text-black-900 w-full"
            size="txtInterRegular16Black900"
          >
            <>
              -1:1 문의처리 내역은 마이페이지 &gt; 1:1 문의를 통해 확인할 수
              있습니다.
            </>
          </Text>
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[74px] items-center justify-center w-full">
            <Button
              className="cursor-pointer flex-1 rounded-[10px] text-base text-center w-full"
              color="blue_gray_100"
              size="3xl"
              variant="fill"
              onClick={() => {
                navigate("InquiryHistory");
              }}
            >
              취소
            </Button>
            <Button
              className="cursor-pointer flex-1 rounded-[10px] text-base text-center w-full"
              color="amber_A100"
              size="3xl"
              variant="fill"
            >
              작성하기
            </Button>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default InquiryFormPage;
