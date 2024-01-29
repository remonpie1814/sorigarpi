import React, { useState } from "react";

import { Button, Img, Input, Layout, Text } from "components";

const PwdModifyFormPage = () => {
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newpassword2, setNewPassword2] = useState("");
  const errMsg = {
    1: <span className="text-deep_orange-600">비밀번호가 너무 짧습니다</span>,
    2: (
      <span className="text-deep_orange-600">
        비밀번호에는 알파벳과 숫자를 하나 이상 넣어주세요
      </span>
    ),
    3: <span className="text-deep_orange-600">현재 비밀번호와 같습니다</span>,
    4: (
      <span className="text-deep_orange-600">비밀번호와 일치하지 않습니다</span>
    ),
  };
  let pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호 수정
          </Text>
          <div className="flex flex-col gap-[5px] items-center justify-start w-full max-w-[540px]">
            <Input
              type="password"
              placeholder="현재 비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setPassword}
            />
            <Text
              className="text-sm tracking-[-0.27px] w-full h-[21px] md:h-auto"
              size="txtInterMedium14Deeporange600"
            >
              {password.length > 0 &&
                (password.length < 4
                  ? errMsg[1]
                  : !pwdRegex.test(password)
                  ? errMsg[2]
                  : null)}
            </Text>
            <Input
              type="password"
              placeholder="새 비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setNewPassword}
            ></Input>
            <Text
              className="text-sm tracking-[-0.27px] w-full h-[21px] md:h-auto"
              size="txtInterMedium14Deeporange600"
            >
              {newpassword.length > 0 &&
                (newpassword.length < 4
                  ? errMsg[1]
                  : !pwdRegex.test(newpassword)
                  ? errMsg[2]
                  : newpassword === password
                  ? errMsg[3]
                  : null)}
            </Text>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setNewPassword2}
            />
            <Text
              className="text-sm tracking-[-0.27px] w-full h-[21px] md:h-auto"
              size="txtInterMedium14Deeporange600"
            >
              {newpassword2.length > 0 &&
                (newpassword2.length < 4
                  ? errMsg[1]
                  : newpassword2 != newpassword
                  ? errMsg[4]
                  : null)}
            </Text>
          </div>
          <div className="h-[57px] w-1/2 mx-auto flex items-center justify-center">
            <Button
              color="amber_A100"
              variant="fill"
              className="w-full rounded-lg"
              size="xl"
            >
              비밀번호 재설정
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PwdModifyFormPage;
