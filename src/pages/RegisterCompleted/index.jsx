import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Layout, Text } from "components";

const RegisterCompletedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
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
            onClick={() => navigate("/main")}
            color="amber_A100"
            size="xl"
            variant="fill"
          >
            메인페이지로
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default RegisterCompletedPage;
