import React, { useContext, useEffect, useRef, useState } from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import { ToolContext, CanvasContext } from "contexts";
import ToolProvider from "./ToolProvider";
import { DraggableImage } from "./DraggableImage";

// JAVA의 enum처럼 쓰기 위한 전역 객체.
// 현재 툴을 if문에서 비교할 때 if(currentTool=="pen")과 같이 문자열로 비교하고 싶지 않기 때문에(오타 낼 거 같음) 추가.
const ToolName = {
  PEN: "pen",
  ERASER: "erase",
  IMAGE: "image",
};

// uuid 생성 함수
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const CanvasPage = () => {
  // 도구 state
  const [currentTool, setCurrentTool] = useState({
    name: ToolName.PEN,
    lineWidth: 10,
  });
  // 현재 페이지 id state
  const [currentPageId, setCurrentPageId] = useState("page-1-id");
  // 현재 히스토리
  const [currentHistory, setCurrentHistory] = useState([]);
  // 현재 캔버스 미리보기 url
  // 이 미리보기가 반영되는 건 편집 페이지를 변경했을 때, saveCanvas 함수 안에서.
  // pages 배열을 자주 수정하고 싶지 않기 때문에 페이지 변경 타이밍에만 바꿈.
  const [dataurl, setDataurl] = useState();
  // 페이지들의 state
  const [pages, setPages] = useState([{ pageId: "page-1-id" }]);
  // 페이지 삭제 모드 state
  const [deletePageMode, setDeletePageMode] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);

  function changePage(toId) {
    saveCanvas(currentPageId, currentHistory, dataurl);
    const target = pages.find((page) => page.pageId === toId);
    setCurrentHistory(target.savedHistory == null ? [] : target.savedHistory);
    setCurrentPageId(target.pageId);
    console.log("change to pageid = " + toId);
  }

  function saveCanvas(id, value, dataurl) {
    // 특정 id를 가진 원소를 찾아서 교체
    const updatedPages = pages.map((page) => {
      if (page.pageId === id) {
        // 일치하는 id를 가진 요소를 찾으면 savedHistory 속성을 새로운 값으로 업데이트
        return { ...page, savedHistory: [...value], dataurl: dataurl };
      }
      return page; // 일치하지 않으면 원래 요소 반환
    });

    // 상태를 업데이트
    setPages(updatedPages);
  }

  function handlePageDelete() {
    const newPages = pages.filter(
      (page) => !selectedPages.includes(page.pageId)
    );
    // 전부 지워버렸을 경우 빈 페이지 추가
    if (newPages.length < 1) {
      while (pages.length > 0) {
        pages.pop();
      }
      pages.push({ pageId: generateUUID() });
      setCurrentHistory([]);
      setDataurl();
      changePage(pages[0].pageId);
    } else {
      // 현재 페이지를 지웠을 경우 첫번째 페이지를 불러온 다음 지움
      if (!newPages.includes(currentPageId)) {
        const pageId = newPages[0].pageId;
        changePage(pageId);
      }
      setPages(newPages);
    }
  }

  document.body.style = "overflow:hidden;user-select:none";
  return (
    <>
      <CanvasContext.Provider
        value={{
          currentTool,
          setCurrentTool,
          currentPageId,
          setCurrentPageId,
          currentHistory,
          setCurrentHistory,
          dataurl,
          setDataurl,
        }}
      >
        <ToolProvider>
          <div className="canvas-wrapper fixed -z-10 flex items-center justify-center w-screen h-screen">
            <Canvas
              id="layer1"
              className={"bg-black-900 absolute"}
              isActive={true}
            />
          </div>
        </ToolProvider>
        <div className="flex flex-col font-inter items-center justify-start">
          <div className="flex flex-col items-start justify-start w-screen">
            <div
              className="flex flex-row items-center justify-between 
                        mx-auto py-[5px] w-full bg-white-A700"
            >
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
          <div className="flex flex-row items-start justify-start w-screen h-0">
            <div className="flex flex-col justify-start !w-[400px] h-screen md:hidden overflow-auto md:px-5 top-[0] bg-blue_gray-100">
              <div className="flex flex-col gap-2.5 items-center justify-start mt-2.5 mx-auto w-[380px]">
                <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                  {deletePageMode ? (
                    <>
                      <Button
                        className="flex flex-row gap-2 items-center p-2
              hover:bg-white-A700"
                        onClick={() => {
                          handlePageDelete();
                          setDeletePageMode(!deletePageMode);
                        }}
                      >
                        <Img
                          className="h-[29px] md:h-auto object-cover w-[27px]"
                          src="images/img_image661.png"
                          alt="image661"
                        />
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16Gray900"
                        >
                          삭제확인
                        </Text>
                      </Button>
                      <Button
                        className="flex flex-row gap-2 items-center p-2
              hover:bg-white-A700"
                        onClick={() => {
                          setDeletePageMode(!deletePageMode);
                          setSelectedPages([]);
                        }}
                      >
                        <Img
                          className="h-[29px] md:h-auto object-cover w-[27px]"
                          src="images/img_image661.png"
                          alt="image661"
                        />
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16Gray900"
                        >
                          취소
                        </Text>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        className="flex flex-row gap-2 items-center p-2
              hover:bg-white-A700"
                        onClick={() => {
                          setDeletePageMode(!deletePageMode);
                          setSelectedPages([]);
                        }}
                      >
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
                      </Button>
                      <Button
                        className="flex flex-row gap-2 items-center p-2
                hover:bg-white-A700"
                        onClick={() => {
                          setPages([
                            ...pages,
                            {
                              pageId: generateUUID(),
                            },
                          ]);
                        }}
                      >
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
                      </Button>
                    </>
                  )}
                </div>
                <div className="flex flex-row gap-5 h-9 md:h-auto items-center justify-center px-5 w-full">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[30px]"
                    src="images/img_image689_30x30.png"
                    alt="image689_One"
                    onClick={() => {
                      const targetIndex =
                        pages.findIndex(
                          (page) => page.pageId == currentPageId
                        ) - 1;
                      if (targetIndex >= 0) {
                        changePage(pages[targetIndex].pageId);
                      }
                    }}
                  />
                  <div className="flex flex-row items-center justify-center w-[34px]">
                    <Text
                      className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                      size="txtInterMedium22Gray900_1"
                    >
                      {pages.findIndex((page) => page.pageId == currentPageId) +
                        1}
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
                      {pages.length}
                    </Text>
                  </div>
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[30px]"
                    src="images/img_image690_30x30.png"
                    alt="image690_One"
                    onClick={() => {
                      const targetIndex =
                        pages.findIndex(
                          (page) => page.pageId == currentPageId
                        ) + 1;
                      if (targetIndex < pages.length) {
                        changePage(pages[targetIndex].pageId);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col h-full items-start mx-auto my-[9px] px-5 py-2.5 w-full">
                <div className="flex flex-col gap-5 justify-start w-[92%]">
                  <div
                    className="grid grid-cols-2
                  w-full"
                  >
                    {pages.map((page, index) => {
                      return (
                        <div
                          key={"page-" + page.pageId}
                          className={`flex flex-col gap-2.5 items-center justify-center p-2 border-[5px]
                        ${
                          deletePageMode
                            ? selectedPages.includes(page.pageId)
                              ? "border-black-900"
                              : ""
                            : page.pageId === currentPageId
                            ? "border-gray-700"
                            : "border-[rgba(0,0,0,0)]"
                        }`}
                          onClick={() => {
                            if (deletePageMode) {
                              if (selectedPages.includes(page.pageId)) {
                                const newSelectedPages = selectedPages.filter(
                                  (p) => p != page.pageId
                                );
                                console.log(selectedPages);
                                setSelectedPages(newSelectedPages);
                              } else {
                                setSelectedPages([
                                  ...selectedPages,
                                  page.pageId,
                                ]);
                              }
                            } else {
                              changePage(page.pageId);
                            }
                          }}
                        >
                          <Img
                            className="h-[175px] w-[130px] bg-white-A700"
                            src={page.dataurl ? page.dataurl : ""}
                            alt="페이지 미리보기"
                          />
                          <Text
                            className="text-base text-center text-gray-900 tracking-[-0.18px] max-w-[80px]"
                            size="txtInterMedium16Gray900"
                          >
                            {index + 1}페이지
                          </Text>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow w-full"></div>
            <Toolbar className="flex items-start bg-slate-400" />
          </div>
        </div>
      </CanvasContext.Provider>
    </>
  );
};

const Toolbar = ({ className }) => {
  const { currentTool, setCurrentTool } = useContext(CanvasContext);
  const [openToolDetail, setOpenToolDetail] = useState(true);

  // 도구마다 state가 따로 있어야 도구를 바꿔도 설정을 불러올 수 있음
  const [penDetail, setPenDetail] = useState({
    name: ToolName.PEN,
    lineWidth: 10,
    color: "#000000",
  });
  const [eraserDetail, setEraserDetail] = useState({
    name: ToolName.ERASER,
    lineWidth: 10,
  });
  const [imageDetail, setImageDetail] = useState({
    name: ToolName.IMAGE,
  });

  // 도구 변경 시 처리할 것들이 있으면 처리
  function handleToolChange(tool) {
    if (currentTool.name === tool.name) return;
    if (currentTool.name === ToolName.IMAGE) {
      // 이미지에서 바뀔 경우 이미지를 고정해야 함
      setImageDetail({ name: ToolName.IMAGE });
    } else if (tool.name === ToolName.IMAGE) {
      // 다른 도구에서 이미지로 바뀔 경우
      setCurrentTool({ name: ToolName.IMAGE, x: 0, y: 0 });
      return;
    }

    setCurrentTool(tool);
  }

  // 펜과 지우개의 굵기 최소, 최대값
  const minLineWidth = 1;
  const maxLineWidth = 30;

  // 펜 색 프리셋 배열
  const presetColors = [
    "#000000",
    "#a8a8a8",
    "#ff0000",
    "#ff8080",
    "#ff8c00",
    "#ffc680",
    "#ffff00",
    "#ffff80",
    "#008000",
    "#6bd66b",
    "#0000ff",
    "#8080ff",
    "#4b0082",
    "#b26fe3",
    "#800080",
    "#f582f5",
  ];

  // 각 툴의 상세 설정(굵기, 색 등) 부분을 떼어서 모아둔 것
  const ReturnTool = {
    pen: (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-[100px] h-[200px]">
          <div className="rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-row gap-3">
              <input
                type="range"
                min={minLineWidth}
                max={maxLineWidth}
                step="0.1"
                value={penDetail.lineWidth}
                onChange={(e) => {
                  const newPen = {
                    ...penDetail,
                    lineWidth: e.target.value,
                  };
                  setPenDetail(newPen);
                  setCurrentTool(newPen);
                }}
                className="slider bg-white-A700"
                style={{
                  accentColor: penDetail.color,
                }}
              />
              <div className="w-[20px] font-bold">{penDetail.lineWidth}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {presetColors.map((color) => {
            return (
              <>
                <div
                  className="rounded-full w-[24px] h-[24px] border-2"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    const newPen = {
                      ...penDetail,
                      color: color,
                    };
                    setPenDetail(newPen);
                    setCurrentTool(newPen);
                  }}
                ></div>
              </>
            );
          })}
        </div>
        <input
          type="color"
          onChange={(e) => {
            const newPen = { ...penDetail, color: e.target.value };
            setPenDetail(newPen);
            setCurrentTool(newPen);
          }}
          className="color-picker"
        />
      </div>
    ),
    erase: (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-[100px] h-[200px]">
          <div className="rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-row gap-3">
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={eraserDetail.lineWidth}
                onChange={(e) => {
                  const newEraser = {
                    ...eraserDetail,
                    lineWidth: e.target.value,
                  };
                  setEraserDetail(newEraser);
                  setCurrentTool(newEraser);
                }}
                className="slider"
              />
              <div className="w-[20px]">{eraserDetail.lineWidth}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    image: (
      <div className="flex flex-col gap-2 items-center justify-center">
        <div>선택된 이미지</div>
        <img src={imageDetail?.file} alt="" />
      </div>
    ),
  };

  return (
    <>
      <div className={`${className}`}>
        {openToolDetail && (
          <div className="bg-[rgba(0,0,0,0.3)] w-[100px] h-auto p-5">
            {ReturnTool[currentTool.name]}
          </div>
        )}

        <div className="bg-gray-100_01 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] w-[55px]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
            onClick={() => {
              handleToolChange(penDetail);
            }}
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
            onClick={() => {
              handleToolChange(eraserDetail);
            }}
          />
          <div className="relative inline-block">
            <Img
              className="absolute top-0 h-[43px] w-[29px]"
              src="images/img_television.svg"
              alt="television"
            />
            <input
              className="absolute top-0 w-[29px] h-[43px] opacity-0"
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const img = new Image();
                    img.onload = () => {
                      setImageDetail({
                        ...imageDetail,
                        src: img.src,
                        width: img.width,
                        height: img.height,
                      });
                      setCurrentTool({
                        ...imageDetail,
                        src: img.src,
                        width: img.width,
                        height: img.height,
                      });
                    };
                    img.src = e.target.result;
                  };
                  reader.readAsDataURL(file);
                }
              }}
              onClick={() => {
                handleToolChange({ name: ToolName.IMAGE });
              }}
            />
          </div>
          <Img
            className="h-[33px] w-[45px]"
            src="images/img_user.svg"
            alt="user"
          />
          <Img
            className="h-[54px] object-cover w-[29px]"
            src="images/img_image754.png"
            alt="image754"
          />
          <Img
            className="h-[54px] object-cover w-[29px]"
            src="images/img_icons8241.png"
            alt="icons8241"
          />
          <Img
            className="h-[54px]  object-cover w-[29px]"
            src="images/img_image764.png"
            alt="image764"
          />
          <Img
            className="h-[55px] object-cover w-[30px]"
            src="images/img_image769.png"
            alt="image769"
          />
        </div>
      </div>
    </>
  );
};

const Canvas = ({ children, className, isActive }) => {
  const {
    currentPageId,
    currentHistory,
    currentTool,
    setCurrentTool,
    setDataurl,
  } = useContext(CanvasContext);
  const {
    onMouseDownHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onMouseMoveHandler,
    onMouseUpHandler,
  } = useContext(ToolContext);
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [canvasPosition, setCanvasPosition] = useState({});
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  // 마우스가 현재 캔버스 위에 있는지 판정. FollowMouse 컴포넌트에서 쓰려고 만든 state.
  const [isMouseOverCanvas, setIsMouseOverCanvas] = useState(true);

  // 캔버스 확대율. 1이 원본 state
  const [scale, setScale] = useState(1);
  const handleWheel = (e) => {
    // e.preventDefault();
    // e.stopPropagation();

    // 확대 및 축소 계수 조정
    let delta = Math.sign(e.deltaY);
    let nextScale = scale - delta * 0.05;

    // 최소/최대 스케일 제한
    if (nextScale < 0.5) nextScale = 0.5;
    if (nextScale > 2) nextScale = 2;

    setScale(nextScale); // 지정
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
    if (currentHistory.length > 0) {
      ctx.putImageData(currentHistory[currentHistory.length - 1].data, 0, 0);
    }
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      setCanvasPosition(rect);
    }
    // 페이지 미리보기 초기화
    setDataurl(canvasRef.current.toDataURL());

    const onKeyDown = (e) => {
      // Control+Z 조합이 눌렸을 때 함수 실행
      if (e.ctrlKey && e.key === "z") {
        if (currentHistory.length > 0) {
          const current = currentHistory[currentHistory.length - 1];

          // 만약 현재 툴이 이미지라면 위치와 크기를 변경
          // 왠진 모르겠지만 pop을 하기 전의 것을 넣어야 잘 나옴. 왠진 모르겠음.
          // 배열에서 pop을 하지 말고 index로 관리하는 게 이해하기 편할 거 같음...
          if (current.tool.name === ToolName.IMAGE) {
            setImagePosition({ ...current.tool.config });
          }
          currentHistory.pop();

          if (currentHistory.length > 0) {
            // 이전 상태로 canvas를 복원
            const prev = currentHistory[currentHistory.length - 1];
            ctx.putImageData(prev.data, 0, 0);
          } else {
            // 모든 그림이 제거되었을 경우, canvas를 비우기
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
        setDataurl(canvasRef.current.toDataURL());
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [currentPageId]);

  return (
    <div
      id="canvas-view"
      className={`flex flex-col flex-grow justify-center items-center
      w-full h-screen overflow-scroll ${className}`}
      onWheel={handleWheel}
    >
      <div id="canvas-wrap" className="relative min-w-[650px] min-h-[720px]">
        <canvas
          className={`bg-white-A700 absolute`}
          ref={canvasRef}
          style={{
            transformOrigin: "center",
            transform: `scale(${scale})`,
          }}
          onMouseDown={() => {
            if (!isActive) return;
            onMouseDownHandler(getCtx);
          }}
          onMouseUp={() => {
            if (!isActive) return;
            onMouseUpHandler(getCtx);
            if (
              currentTool.name !== ToolName.ERASER ||
              currentHistory.length > 0
            ) {
              currentHistory.push({
                tool: currentTool,
                data: getCtx.getImageData(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                ),
              });
            }
            setDataurl(canvasRef.current.toDataURL("image/png"));
          }}
          onMouseMove={(e) => {
            if (!isActive) return;
            onMouseMoveHandler(getCtx, e);
          }}
          onMouseLeave={() => {
            if (!isActive) return;
            setIsMouseOverCanvas(false);
            onMouseLeaveHandler(getCtx);
          }}
          onMouseEnter={() => {
            if (!isActive) return;
            setIsMouseOverCanvas(true);
            onMouseEnterHandler(getCtx);
          }}
        ></canvas>
        {currentTool.name === ToolName.IMAGE && (
          <DraggableImage
            {...currentTool}
            className="absolute w-[650px] h-[720px]"
            initialPosition={imagePosition}
            canvas={canvasRef}
            ctx={getCtx}
          />
        )}
      </div>

      {/* {isMouseOverCanvas && <FollowMouse {...currentTool} />} */}
    </div>
  );
};

const FollowMouse = ({ lineWidth, color }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: position.x - lineWidth / 2,
        top: position.y - lineWidth / 2,
        width: lineWidth + "px",
        height: lineWidth + "px",
        border: "solid 1px",
        borderColor: color,
        borderRadius: "100%",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default CanvasPage;
