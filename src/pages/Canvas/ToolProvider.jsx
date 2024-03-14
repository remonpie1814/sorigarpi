// src/pages/Canvas/ToolProvider.jsx
import React, { useContext, useState } from "react";
import { CanvasContext, ToolContext } from "contexts";

const ToolProvider = ({ children }) => {
  const { currentTool } = useContext(CanvasContext);
  const [painting, setPainting] = useState(false);

  const ToolStrategy = {
    pen: {
      onMouseMoveHandler: (ctx, e) => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        if (!painting) {
          ctx.lineWidth = currentTool.lineWidth;
          ctx.strokeStyle = currentTool.color;
          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
        } else {
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      },
      onMouseDownHandler: () => {
        setPainting(true);
      },
      onMouseUpHandler: () => {
        setPainting(false);
      },
      onMouseEnterHandler: () => {},
      onMouseLeaveHandler: () => {
        onMouseUpHandler();
      },
    },
    erase: {
      onMouseMoveHandler: (ctx, e) => {
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;
        if (!painting) {
          ctx.lineWidth = currentTool.lineWidth;
          // 속성을 색상 제거로 변경
          ctx.globalCompositeOperation = "destination-out";
          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
        } else {
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      },
      onMouseDownHandler: () => {
        setPainting(true);
      },
      onMouseUpHandler: (ctx) => {
        setPainting(false);
        ctx.globalCompositeOperation = "source-over";
      },
      onMouseEnterHandler: () => {},
      onMouseLeaveHandler: (ctx) => {
        onMouseUpHandler(ctx);
      },
    },
  };

  const error = () => {
    console.error("현재 도구의 이름이 잘못 설정되어 있습니다.");
  };
  const {
    onMouseMoveHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onMouseUpHandler,
    onMouseDownHandler,
  } = ToolStrategy[currentTool.name] || {
    onMouseMoveHandler: error,
    onMouseDownHandler: error,
    onMouseUpHandler: error,
    onMouseEnterHandler: error,
    onMouseLeaveHandler: error,
  };
  return (
    <ToolContext.Provider
      value={{
        onMouseEnterHandler,
        onMouseLeaveHandler,
        onMouseDownHandler,
        onMouseMoveHandler,
        onMouseUpHandler,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolProvider;
