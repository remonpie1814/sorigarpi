import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";

const RegisterCompletedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[120px] w-full">
          <Text
            className="leading-[150.00%] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
            size="txtInterMedium22Gray900_1"
          >
            <>
              xxx@x xx.com으로
              <br />
              이메일을 발송했습니다
            </>
          </Text>
          <Text
            className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.30px]"
            size="txtInterMedium16"
          >
            <>
              이메일로 전송된 링크를 클릭하신 후에
              <br />
              가입한 이메일로 로그인하실 수 있습니다.
            </>
          </Text>
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[400px] sm:min-w-full rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            onClick={() => navigate("/page10")}
            color="amber_A100"
            size="lg"
            variant="fill"
          >
            메인페이지로
          </Button>
        </div>
        <Footer className="bg-blue_gray-50_02 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default RegisterCompletedPage;
