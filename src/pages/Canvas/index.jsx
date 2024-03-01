import React, { useEffect, useRef, useState } from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const CanvasPage = () => {
  document.body.style = "overflow:hidden";
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start h-screen">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto py-[5px] w-full">
            <Img
              className="h-[30px] w-[260px]"
              src="images/img__black_900_30x260.svg"
              alt="FourHundredThirtySix"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
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
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
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
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
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
          <Canvas />
          <CanvasRowthumbsup className="fixed right-0 flex sm:gap-10 items-start" />
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

const CanvasRowthumbsup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start px-5">
          <div className="bg-black-900_99 flex flex-col items-center justify-start rounded-[12px] w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Img
                    className="h-[78px] md:h-auto object-cover w-[77px]"
                    src="images/img_image683.png"
                    alt="image683"
                  />
                  <Img
                    className="h-[85px] md:h-auto object-cover"
                    src="images/img_image682.png"
                    alt="image682"
                  />
                  <Img
                    className="h-[65px] md:h-auto object-cover"
                    src="images/img_image686.png"
                    alt="image686"
                  />
                  <Img
                    className="h-[66px] md:h-auto object-cover"
                    src="images/img_image685.png"
                    alt="image685"
                  />
                </div>
                <div className="flex flex-row gap-[66px] items-start justify-start w-auto">
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image689_30x30.png"
                    alt="image691"
                  />
                  <Img
                    className="h-9 md:h-auto object-cover w-9"
                    src="images/img_image690_30x30.png"
                    alt="image691_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] w-[55px]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
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

const Canvas = () => {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);
  const [tracking, setTracking] = useState([]);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 650;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    setGetCtx(ctx);

    const onKeyDown = (e) => {
      // Control+Z 조합이 눌렸을 때 함수 실행
      if (e.ctrlKey && e.key === "z") {
        if (tracking.length > 0) {
          // 가장 최근 상태를 제거하고, 이전 상태로 canvas를 복원
          tracking.pop();
          if (tracking.length > 0) {
            ctx.putImageData(tracking[tracking.length - 1], 0, 0);
          } else {
            // 모든 그림이 제거되었을 경우, canvas를 비우기
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      id="canvas-view"
      className="flex flex-col flex-grow justify-center items-center
      w-full h-screen overflow-scroll"
    >
      <div id="canvas-wrap" className="">
        {tracking.length}
        <canvas
          className="bg-white-A700"
          ref={canvasRef}
          onMouseDown={() => setPainting(true)}
          onMouseUp={() => {
            if (painting) {
              tracking.push(
                getCtx.getImageData(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                )
              );
            }
            setPainting(false);
          }}
          onMouseMove={(e) => drawFn(e)}
          onMouseLeave={() => {
            if (painting) {
              tracking.push(
                getCtx.getImageData(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                )
              );
            }
            setPainting(false);
          }}
        ></canvas>
      </div>
    </div>
  );
};

export default CanvasPage;
