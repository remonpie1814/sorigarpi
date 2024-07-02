import React, { useRef, useState } from "react";
import { signUp } from "utils/DataService";
import { Button, CheckBox, Img, Input, Layout, Text, Toast } from "components";

const RegisterFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickName, setNickName] = useState("");

  // 참조 생성
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  //정규식
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let pwdRegex = /^(?=.*[a-zA-Z])(?=.*\d).*$/;

  function checkValidation() {
    if (!emailRegex.test(email)) {
      emailRef.current.focus();
      return false;
    }
    if (password.length < 4 || !pwdRegex.test(password)) {
      passwordRef.current.focus();
      return false;
    }
    if (password2 !== password) {
      password2Ref.current.focus();
      return false;
    }
    return true;
  }

  // todo: 회원가입 버튼 동작 함수
  async function handleRegisterSubmit() {
    const isValidate = checkValidation();
    if (isValidate) {
      console.log("회원가입 진행");
      let userDto = {
        email: email,
        pwd: password,
        nickName: nickName,
      };
      const data = await signUp(userDto);
      console.log(data);
    }
  }

  return (
    <>
      <Layout>
        <div
          className="flex flex-col gap-[50px] items-center justify-between
        h-[899px] md:h-auto max-w-[1180px] w-[540px] mx-auto md:px-5 py-[120px]"
        >
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            회원가입
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="input"
              ref={emailRef}
              placeholder="이메일"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setEmail}
            ></Input>

            <ErrMSG>
              {email.length > 0 && !emailRegex.test(email) ? (
                <span className="text-deep_orange-600">
                  이메일 형식에 맞지 않습니다
                </span>
              ) : null}
            </ErrMSG>
            <Input
              type="password"
              ref={passwordRef}
              placeholder="비밀번호"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setPassword}
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
              type="password"
              ref={password2Ref}
              placeholder="비밀번호 확인"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setPassword2}
            ></Input>
            <ErrMSG>
              {password2.length > 0 && password2 !== password ? (
                <span className="text-deep_orange-600">
                  비밀번호와 일치하지 않습니다
                </span>
              ) : null}
            </ErrMSG>
            <Input
              placeholder="닉네임(12자)"
              className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
              wrapClassName="w-full"
              onChange={setNickName}
            ></Input>
            <ErrMSG>
              {nickName && (
                <span className="text-green-700">사용가능한 닉네임입니다</span>
              )}
            </ErrMSG>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-100_01 flex flex-col items-center justify-center px-5 rounded-[10px] w-full h-[30px]">
              <CheckBox
                className="flex flex-row justify-center items-center font-medium text-base tracking-[-0.30px] w-full text-center"
                inputClassName="w-5 h-5 mr-2 outline outline-[2px] outline-gray-300 rounded-sm"
                name="agreement"
                id="ThreeHundredEightyNine"
                label="개인정보 이용동의"
                color="white_A700"
                variant="fill"
              ></CheckBox>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium w-full rounded-[10px]
                      text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            onClick={() => {
              handleRegisterSubmit();
            }}
            color="amber_A100"
            size="xl"
            variant="fill"
          >
            회원가입
          </Button>
        </div>
      </Layout>
    </>
  );
};

const ErrMSG = ({ children }) => {
  return (
    <div className="flex flex-col h-[21px] md:h-auto items-center justify-start px-5 w-full">
      <Text
        className={`text-sm tracking-[-0.27px] w-full`}
        size="txtInterMedium14GreenA700"
      >
        {children}
      </Text>
    </div>
  );
};

export default RegisterFormPage;
