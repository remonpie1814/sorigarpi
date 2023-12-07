import React, { useState } from "react";

import { Button, Img, Input, Text } from "components";

const FrameOnePage = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [showInputs, setShowInputs] = useState(false);

  const updateUser = async () => {
    console.log(JSON.stringify({ name, email }));
    const response = await fetch(
      `https://rwzhy0bna5.execute-api.us-east-1.amazonaws.com/test/users/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: user.name, email: user.email }),
      }
    );

    if (response.ok) {
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  };

  const fetchUser = async () => {
    const response = await fetch(
      `https://rwzhy0bna5.execute-api.us-east-1.amazonaws.com/test/users/${id}`
    );

    const data = await response.json();
    console.log(data);
    console.log("data-----");
    setUser(data);
  };

  const deleteUser = async () => {
    const response = await fetch(
      `https://rwzhy0bna5.execute-api.us-east-1.amazonaws.com/test/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("User deleted successfully");
    } else {
      alert("Failed to delete user");
    }
  };
  const postData = async () => {
    const response = await fetch(
      "https://rwzhy0bna5.execute-api.us-east-1.amazonaws.com/test/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, email }),
      }
    );

    if (response.ok) {
      alert("Data posted successfully");
    } else {
      alert("Failed to post data");
    }
  };
  const fetchData = async () => {
    const response = await fetch(
      "https://rwzhy0bna5.execute-api.us-east-1.amazonaws.com/test/users"
    );
    console.log(response);
    const data = await response.json();
    setData(data);
  };

  const awsPost = async () => {
    const AWS = require("aws-sdk");
    AWS.config.update({ region: "us-east-1" });
    AWS.config.update({
      accessKeyId: "AKIAWVWUYMYLFHPLRJLV",
      secretAccessKey: "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",
      region: "us-east-1",
    });

    const sqs = new AWS.SQS();

    const params = {
      MessageBody: JSON.stringify({
        CustID: "1234",
        Name: "John Doe",
      }),
      QueueUrl:
        "https://sqs.us-east-1.amazonaws.com/458933954070/LambdaRDSQueue", // 실제 Queue URL로 변경해야 합니다.
    };

    sqs.sendMessage(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    });
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-amber-A100 flex flex-row md:gap-10 items-center justify-between px-3 w-full">
          <div className="flex flex-col items-center justify-start ml-[7px] md:px-5">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterRegular24"
            >
              소리갈피
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start md:px-5 w-auto">
            <Img
              className="h-[35px] md:h-auto object-cover w-[35px]"
              src="images/img__30x30.png"
              alt="image916"
            />
            <Img
              className="h-[39px] md:h-auto object-cover w-[39px]"
              src="images/img_image914.png"
              alt="image914"
            />
            <Img
              className="h-7 md:h-auto object-cover w-7"
              src="images/img_image915.png"
              alt="image915"
            />
          </div>
        </div>
      </div>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-center mx-auto w-auto sm:w-full md:w-full">
        <Button
          onClick={() => {
            fetchData();
          }}
          className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
          shape="round"
          color="yellow_200"
          size="lg"
          variant="fill"
        >
          유저 정보 전체 가져오기
        </Button>
        {data && <div>{JSON.stringify(data)}</div>}
        <Input
          name="email"
          placeholder="이메일"
          className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
          wrapClassName="border border-gray-300 border-solid w-full"
          color="white_A700"
          variant="fill"
          onChange={(value) => setEmail(value)}
        ></Input>
        <Input
          name="name"
          placeholder="이름"
          className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
          wrapClassName="border border-gray-300 border-solid w-full"
          color="white_A700"
          variant="fill"
          onChange={(value) => setName(value)}
        ></Input>
        <Button
          onClick={() => {
            postData();
          }}
          className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
          shape="round"
          color="yellow_200"
          size="lg"
          variant="fill"
        >
          유저 추가하기
        </Button>
      </div>
      <br />
      <Input
        name="id"
        placeholder="아이디(숫자)"
        className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
        wrapClassName="border border-gray-300 border-solid w-full"
        color="white_A700"
        variant="fill"
        onChange={(value) => setId(value)}
      ></Input>
      {user && (
        <div>
          <div>조회된 유저 정보</div>
          {JSON.stringify(user)}
          <button
            className="border"
            onClick={() => {
              setShowInputs(!showInputs);
            }}
          >
            이 유저 정보 수정
          </button>
          {showInputs && (
            <>
              <Input
                name="useremail"
                placeholder="이메일"
                className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
                onChange={(value) => {
                  var userC = user;
                  userC.email = value;
                  setUser(userC);
                }}
              ></Input>
              <Input
                name="username"
                placeholder="이름"
                className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
                onChange={(value) => {
                  var userC = user;
                  userC.name = value;
                  setUser(userC);
                }}
              ></Input>
              <Button
                onClick={() => {
                  updateUser();
                }}
                className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
                shape="round"
                color="yellow_200"
                size="lg"
                variant="fill"
              >
                유저 정보 수정하기
              </Button>
            </>
          )}
        </div>
      )}
      <Button
        onClick={() => {
          fetchUser();
        }}
        className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
        shape="round"
        color="yellow_200"
        size="lg"
        variant="fill"
      >
        해당 아이디 유저 조회하기
      </Button>

      <Button
        onClick={() => {
          deleteUser();
        }}
        className="cursor-pointer min-w-[480px] sm:min-w-full text-[15px] text-center tracking-[-0.17px]"
        shape="round"
        color="yellow_200"
        size="lg"
        variant="fill"
      >
        해당 아이디 유저 삭제하기
      </Button>

      <br />
      <button
        onClick={() => {
          awsPost();
        }}
      >
        awslambda 함수에 sqs로 데이터 전송 테스트
      </button>
    </>
  );
};

export default FrameOnePage;
