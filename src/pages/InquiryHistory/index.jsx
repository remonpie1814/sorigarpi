import React, { useState } from "react";

import { Button, Img, Layout, Line, List, Text } from "components";

const InquiryHistoryPage = () => {
  const [inquiryList, setInquiryList] = useState([
    { status: "답변대기", content: "문의" },
    { status: "답변완료", content: "문의22222" },
  ]);
  const [searchCondition, setCondition] = useState({
    status: "",
    period: "",
    customPeriod: { startDate: "", endDate: "" },
  });
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px]"
            size="txtInterMedium28Gray900"
          >
            1:1 문의내역
          </Text>
          <InquirySearchDropdown setCondition={setCondition} />
          <div className="flex flex-col gap-5 items-start justify-start w-full md:w-full">
            {inquiryList.map((inquiry, index) => {
              return <InquiryRow {...inquiry} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

const InquiryRow = ({ status, content }) => {
  return (
    <div className="flex flex-col gap-[30px] items-start justify-start w-full">
      <div className="flex flex-col gap-4 items-center justify-start w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1180px] w-full">
          <div className="flex flex-row flex-grow gap-2.5 items-center justify-start">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center tracking-[-0.53px] w-[22px]"
              size="txtInterBold28"
            >
              Q
            </Text>
            <Text
              className={`text-base text-center tracking-[-0.30px]
                        ${
                          status == "답변완료"
                            ? "text-blue-700"
                            : "text-red-A700_01"
                        }`}
              size="txtInterRegular16"
            >
              {status}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center w-auto">
            <Button className="font-bold text-base text-black-900 text-center tracking-[-0.30px]">
              수정
            </Button>
            <Button className="font-bold text-base text-black-900 text-center tracking-[-0.30px]">
              삭제
            </Button>
          </div>
        </div>
        <Text
          className="leading-[150.00%] w-full max-w-[1115px] md:max-w-full text-base text-black-900 tracking-[-0.30px]"
          size="txtInterRegular16Black900"
        >
          {content}
        </Text>
      </div>
      <Line className="bg-gray-200_01 h-px w-full" />
    </div>
  );
};

const InquirySearchDropdown = ({ setCondition }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState("");
  const [period, setPeriod] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const selectedButtonSetting = {
    className: "rounded-2xl w-full py-4",
    variant: "fill",
    color: "amber_A100",
  };
  const unSelectedButtonSetting = {
    className: "rounded-2xl w-full py-4 border-[1px] border-gray-700",
  };
  function buttonSetting(isSelected) {
    return isSelected ? selectedButtonSetting : unSelectedButtonSetting;
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full md:w-full">
        <div
          className="flex flex-row gap-3 items-center justify-start w-auto"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Text
            className="text-base text-black-900 text-center tracking-[-0.30px]"
            size="txtInterRegular16Black900"
          >
            전체보기
          </Text>
          <Line className="bg-black-900 h-[31px] w-0.5" />
          <Text
            className="text-base text-black-900 text-center tracking-[-0.30px]"
            size="txtInterRegular16Black900"
          >
            전체기간
          </Text>
          <Img
            className={`h-8 md:h-auto object-cover w-8
            transition duration-300
             ${isOpen ? "rotate-180" : null}`}
            src="images/img_down11_32x32.png"
            alt="downEleven"
          />
        </div>
        {
          <div className="w-full">
            <div
              className={`grid grid-cols-2 md:grid-cols-1 gap-4 w-full px-2
                      overflow-hidden
                      ${isOpen ? "h-auto py-2" : "h-0 py-0"}`}
            >
              <div className="flex flex-col">
                <Text
                  className="flex items-center justify-start h-auto py-2
                          text-2xl"
                >
                  처리상태
                </Text>
                <div className="grid grid-rows-3 gap-4">
                  <Button
                    {...buttonSetting(!status || status == "all")}
                    onClick={() => {
                      setStatus("all");
                    }}
                  >
                    전체보기
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      {...buttonSetting(status == "wait")}
                      onClick={() => {
                        setStatus("wait");
                      }}
                    >
                      답변대기
                    </Button>
                    <Button
                      {...buttonSetting(status == "done")}
                      onClick={() => {
                        setStatus("done");
                      }}
                    >
                      답변완료
                    </Button>
                  </div>
                  <Button
                    className="rounded-2xl w-full py-6"
                    variant="fill"
                    color="blue_gray_100_01"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    취소
                  </Button>
                </div>
              </div>
              <div className="flex flex-col">
                <Text
                  className="flex items-center justify-start h-auto py-2
                  text-2xl"
                >
                  기간조회
                </Text>
                <div className="grid grid-rows-3 gap-4">
                  <div className="grid grid-cols-5 gap-2">
                    <Button
                      {...buttonSetting(!period || period == "all")}
                      onClick={() => {
                        setPeriod("all");
                      }}
                    >
                      전체시기
                    </Button>
                    <Button
                      {...buttonSetting(period == "week")}
                      onClick={() => {
                        setPeriod("week");
                      }}
                    >
                      1주일
                    </Button>
                    <Button
                      {...buttonSetting(period == "month")}
                      onClick={() => {
                        setPeriod("month");
                      }}
                    >
                      1개월
                    </Button>
                    <Button
                      {...buttonSetting(period == "quarter")}
                      onClick={() => {
                        setPeriod("quarter");
                      }}
                    >
                      3개월
                    </Button>
                    <Button
                      {...buttonSetting(period == "custom")}
                      onClick={() => {
                        setPeriod("custom");
                      }}
                    >
                      기간설정
                    </Button>
                  </div>
                  <div
                    className={`flex flex-row items-center justify-center gap-5 px-2 py-2
                            ${
                              period == "custom" ? "opacity-100" : "opacity-0"
                            }`}
                  >
                    <input
                      className="rounded-xl"
                      type="date"
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                    ~
                    <input
                      className="rounded-xl"
                      type="date"
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <Button
                      className="rounded-2xl w-full py-6"
                      variant="fill"
                      color="amber_A100"
                      onClick={() => {
                        setCondition({
                          status: status,
                          period: period,
                          customPeriod: {
                            startDate: startDate,
                            endDate: endDate,
                          },
                        });
                        setIsOpen(!isOpen);
                      }}
                    >
                      적용하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <Line className="bg-black-900 h-px w-full" />
      </div>
    </>
  );
};

export default InquiryHistoryPage;
