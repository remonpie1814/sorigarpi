import React, { useEffect, useRef, useState } from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

// JAVA의 enum처럼 쓰기 위한 전역 객체.
// 현재 툴을 if문에서 비교할 때 if(currentTool=="pen")과 같이 문자열로 비교하고 싶지 않기 때문에(오타 낼 거 같음) 추가.
const ToolName = {
  PEN: "pen",
  ERASER: "erase",
};

const CanvasPage = () => {
  // 도구 state
  const [currentTool, setCurrentTool] = useState(ToolName.PEN);
  // 현재 페이지 state
  const [currentPage, setCurrentPage] = useState("page-1-id");
  // 현재 히스토리
  const [currentHistory, setCurrentHistory] = useState([]);
  // 페이지들의 state
  const [pages, setPages] = useState([
    { pageId: "page-1-id" },
    { pageId: "page-2-id" },
  ]);

  function changePage(toId) {
    saveCanvas(currentPage, currentHistory);
    const target = pages.find((page) => page.pageId === toId);
    setCurrentHistory(target.savedHistory == null ? [] : target.savedHistory);
    setCurrentPage(target.pageId);
    console.log("change to pageid = " + toId);
  }

  function saveCanvas(id, value) {
    // 특정 id를 가진 원소를 제거하고 새 원소를 추가하여 업데이트된 배열을 생성
    const updatedPages = pages.filter((page) => page.pageId !== id);
    updatedPages.push({ pageId: id, savedHistory: [...value] });
    // 상태를 업데이트
    setPages(updatedPages);

    pages.map((page) => {
      console.log("canvas saved.");
      console.log(page);
    });
  }

  document.body.style = "overflow:hidden";
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start h-screen">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex flex-row items-center justify-between mx-auto py-[5px] w-full">
            <Img
              className="h-[30px] w-[260px]"
              src="images/img__black_900_30x260.svg"
              alt="FourHundredThirtySix"
            />
            <div className="flex flex-row gap-5 items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image689.png"
                alt="image689"
              />
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image690.png"
                alt="image690"
              />
              <Button
                className="cursor-pointer font-medium text-base text-center tracking-[-0.30px] w-[140px]"
                shape="square"
                color="blue_gray_100"
                size="md"
                variant="fill"
              >
                임시저장
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[140px] text-base text-center tracking-[-0.30px]"
                shape="square"
                color="blue_gray_100"
                size="md"
                variant="fill"
              >
                완성하기
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar className="fixed left-0 !w-[400px] bg-gray-600_7f flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <CanvasPageButtons className="flex flex-col gap-2.5 items-center justify-start mt-2.5 mx-auto w-[380px] sm:w-full" />
            <div className="flex flex-col h-full items-start justify-center mx-auto my-[9px] px-5 py-2.5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[92%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div
                    className="flex flex-col gap-2.5 items-center justify-start w-[130px]"
                    onClick={() => {
                      changePage("page-1-id");
                    }}
                  >
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyOne"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[50px]"
                      size="txtInterMedium16Gray900"
                    >
                      1페이지
                    </Text>
                  </div>
                  <div
                    className="flex flex-col gap-2.5 items-center justify-start w-[130px]"
                    onClick={() => {
                      changePage("page-2-id");
                    }}
                  >
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyTwo"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      2페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyThree"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      3페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyFour"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[53px]"
                      size="txtInterMedium16Gray900"
                    >
                      4페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyFive"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      5페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortySix"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      6페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortySeven"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      7페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <Img
                      className="h-[175px] w-[130px]"
                      src="images/img__deep_orange_100.svg"
                      alt="FourHundredFortyEight"
                    />
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900"
                    >
                      8페이지
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <Canvas
            currentTool={currentTool}
            pageId={currentPage}
            history={currentHistory}
            setCurrentHistory={setCurrentHistory}
          />
          <CanvasRowthumbsup
            className="flex sm:gap-10 items-start"
            setCurrentTool={setCurrentTool}
          />
        </div>
      </div>
    </>
  );
};

const CanvasPageButtons = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-center w-full">
          <Img
            className="h-[29px] md:h-auto object-cover w-[27px]"
            src="images/img_image661.png"
            alt="image661"
          />
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900"
          >
            페이지 삭제
          </Text>
          <Img
            className="h-[33px] md:h-auto object-cover w-[30px]"
            src="images/img__33x30.png"
            alt="FourHundredThirtyEight"
          />
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900"
          >
            페이지 추가
          </Text>
        </div>
        <div className="flex flex-row gap-5 h-9 md:h-auto items-center justify-center px-5 w-full">
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image689_30x30.png"
            alt="image689_One"
          />
          <div className="flex flex-row items-center justify-center w-[34px]">
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              1
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              /
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              8
            </Text>
          </div>
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image690_30x30.png"
            alt="image690_One"
          />
        </div>
      </div>
    </>
  );
};

const CanvasRowthumbsup = ({ className, setCurrentTool }) => {
  return (
    <>
      <div className={className}>
        <div className="bg-gray-100_01 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] w-[55px]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
            onClick={() => {
              setCurrentTool(ToolName.PEN);
            }}
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
            onClick={() => {
              setCurrentTool(ToolName.ERASER);
            }}
          />
          <Img
            className="h-[43px] w-[29px]"
            src="images/img_television.svg"
            alt="television"
          />
          <Img
            className="h-[33px] w-[45px]"
            src="images/img_user.svg"
            alt="user"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image754.png"
            alt="image754"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_icons8241.png"
            alt="icons8241"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image764.png"
            alt="image764"
          />
          <Img
            className="h-[55px] md:h-auto object-cover w-[30px]"
            src="images/img_image769.png"
            alt="image769"
          />
        </div>
      </div>
    </>
  );
};

const Canvas = ({ pageId, history, currentTool }) => {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);

  const drawFn = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  const eraseFn = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    if (!painting) {
      // 속성을 색상 제거로 변경
      getCtx.globalCompositeOperation = "destination-out";
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }

    // clearRect로 지우개를 구현한 방법. 지워진 자국이 네모네모해서 쓰지 않기로 함.
    // if (painting) {
    //   getCtx.clearRect(
    //     mouseX - getCtx.lineWidth / 2,
    //     mouseY - getCtx.lineWidth / 2,
    //     getCtx.lineWidth,
    //     getCtx.lineWidth
    //   );
    // }
  };

  const onMouseDownHandler = () => {
    setPainting(true);
  };

  const onMouseUpHandler = () => {
    // 속성을 디폴트 값으로 돌림
    getCtx.globalCompositeOperation = "source-over";
    // 각 도구별 마우스를 뗐을 때의 동작
    if (painting) {
      if (currentTool == ToolName.PEN) {
        history.push({
          tool: currentTool,
          data: getCtx.getImageData(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          ),
        });
      } else if (currentTool == ToolName.ERASER) {
        if (history.length > 0) {
          history.push({
            tool: currentTool,
            data: getCtx.getImageData(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            ),
          });
        }
      }
      setPainting(false);
    }
  };

  const onMouseMoveHandler = (e) => {
    // 각 도구별 마우스를 클릭한 채 움직일 때의 동작
    if (currentTool == ToolName.PEN) {
      drawFn(e);
    } else if (currentTool == ToolName.ERASER) {
      eraseFn(e);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 650;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (history.length > 0) {
      ctx.putImageData(history[history.length - 1].data, 0, 0);
    }

    const onKeyDown = (e) => {
      // Control+Z 조합이 눌렸을 때 함수 실행
      if (e.ctrlKey && e.key === "z") {
        console.log(history.length);
        if (history.length > 0) {
          // 가장 최근 상태를 제거하고, 이전 상태로 canvas를 복원
          history.pop();
          if (history.length > 0) {
            ctx.putImageData(history[history.length - 1].data, 0, 0);
          } else {
            // 모든 그림이 제거되었을 경우, canvas를 비우기
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    console.log(pageId + "mounted");
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      console.log(pageId + "unmounted");
    };
  }, [pageId]);

  return (
    <div
      id="canvas-view"
      className="flex flex-col flex-grow justify-center items-center
      h-screen overflow-scroll"
    >
      <div id="canvas-wrap" className="">
        {history.length}
        <canvas
          className="bg-white-A700"
          ref={canvasRef}
          onMouseDown={() => {
            onMouseDownHandler();
          }}
          onMouseUp={() => {
            onMouseUpHandler();
          }}
          onMouseMove={(e) => {
            onMouseMoveHandler(e);
          }}
          onMouseLeave={() => {
            onMouseUpHandler();
          }}
        ></canvas>
      </div>
    </div>
  );
};

export default CanvasPage;
