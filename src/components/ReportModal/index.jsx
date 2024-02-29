import { Button, CheckBox, Text } from "components";
import { useEffect, useState } from "react";

const ReportModal = ({ type, id, writer, content, closeModal }) => {
  const [selectedReason, setSelectedReason] = useState(0);
  // 신고 제어 함수.
  // todo: 신고제어 함수 내용 채우기
  function handleReport() {
    console.log(type + ":" + id + "를 신고");
  }

  // 1번 방법. 이게 짧긴 함. 모든 페이지에서 쓸 수 있게 하려면 overflow:auto 부분을 props로 받아서 조정해줘야 하지 않을까.
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen
                    flex items-center justify-center z-10"
      >
        <div
          className="fixed top-0 left-0 w-full h-full bg-black-900 opacity-50"
          onClick={() => {
            closeModal();
          }}
        ></div>
        <div
          className="w-[500px] h-auto bg-white-A700 z-20 p-5
                    flex flex-col gap-2"
        >
          <div
            className="w-full flex items-center justify-center
                        text-center font-bold text-xl"
          >
            신고하기
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col font-bold">
              <div>작성자 | {writer}</div>
              <div>내용 | {content}</div>
            </div>
            <div>
              <div>신고사유</div>
              <div className="flex flex-col gap-1">
                {[
                  { value: "1", text: "스팸 홍보 도배글입니다." },
                  { value: "2", text: "음란물입니다." },
                  { value: "3", text: "불법정보를 포함하고 있습니다." },
                  { value: "4", text: "욕설/생명경시/혐오/차별적표현입니다." },
                  { value: "5", text: "개인정보 노출 게시물입니다." },
                  { value: "6", text: "불쾌한 표현이 있습니다." },
                ].map((item, index) => {
                  return (
                    <>
                      <label
                        className={`flex flex-row gap-2 items-center justify-center
                        ${
                          selectedReason == index
                            ? "bg-amber-100 font-bold"
                            : null
                        }`}
                        key={"report_reason_row_" + index}
                      >
                        {index == 0 ? (
                          <input
                            className="checked:bg-black-900 focus:bg-black-900"
                            name="reason"
                            type="radio"
                            value={item.value}
                            onInput={() => {
                              setSelectedReason(index);
                            }}
                            defaultChecked
                          />
                        ) : (
                          <input
                            className="checked:bg-black-900 focus:bg-black-900"
                            name="reason"
                            type="radio"
                            value={item.value}
                            onInput={() => {
                              setSelectedReason(index);
                            }}
                          />
                        )}
                        <Text className="flex-grow">{item.text}</Text>
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <Button
                className="w-full py-4 font-bold"
                variant="fill"
                color="amber_A100"
                onClick={() => {
                  handleReport();
                  closeModal();
                }}
              >
                신고하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ReportModal };
