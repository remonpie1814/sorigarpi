import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Layout, Text } from "components";

const PwdResetFormPage = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  //정규식
  let pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호 재설정
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="input"
              placeholder="새 비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
              onChange={setPassword}
              type="password"
            ></Input>
            <ErrMSG>
              {password.length > 0 ? (
                password.length < 4 ? (
                  <span className="text-deep_orange-600">
                    4자 이상으로 입력해주세요
                  </span>
                ) : !pwdRegex.test(password) ? (
                  <span className="text-deep_orange-600">
                    알파벳과 숫자를 하나 이상 포함해주세요
                  </span>
                ) : null
              ) : null}
            </ErrMSG>
            <Input
              name="input_One"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-[56%]"
              onChange={setPassword2}
              type="password"
            ></Input>
            <ErrMSG>
              {password2.length > 0 && password2 !== password ? (
                <span className="text-deep_orange-600">
                  비밀번호와 일치하지 않습니다
                </span>
              ) : null}
            </ErrMSG>
          </div>
          <Button
            className="common-pointer cursor-pointer font-medium min-w-[400px] sm:min-w-full rounded-[10px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            onClick={() => navigate("/loginform")}
            color="amber_A100"
            size="xl"
            variant="fill"
          >
            비밀번호 재설정
          </Button>
        </div>
      </Layout>{" "}
    </>
  );
};

const ErrMSG = ({ children }) => {
  return (
    <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-[56%]">
      <Text
        className={`text-sm tracking-[-0.27px] w-full`}
        size="txtInterMedium14GreenA700"
      >
        {children}
      </Text>
    </div>
  );
};

export default PwdResetFormPage;
