import { CanvasContext } from "contexts";
import React, { useContext, useEffect, useRef, useState } from "react";

// 참조 https://bepyan.github.io/blog/dnd-master/1-drag-event
export const DraggableImage = ({
  src,
  ctx,
  canvas,
  width,
  height,
  className,
  initialPosition,
}) => {
  const { currentTool, setCurrentTool, currentHistory } =
    useContext(CanvasContext);

  const [{ x, y, w, h }, setConfig] = useState(
    initialPosition
      ? initialPosition
      : {
          x: 0,
          y: 0,
          w: width,
          h: height,
        }
  );
  const boxRef = useRef(null);
  const boundaryRef = useRef(null);

  const BOUNDARY_MARGIN = 0;
  const MIN_W = 80;
  const MIN_H = 80;

  // state의 갱신은 느리므로 x,y,w,h를 바로 추적하기 위해 만들어놓은 변수
  let updatedX = x;
  let updatedY = y;
  let updatedW = w;
  let updatedH = h;

  const inrange = (v, min, max) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
  };

  // 현재 이미지의 위치와 크기를 History에 저장해두는 함수
  function pushImageConfigToHistory() {
    currentHistory.push({
      tool: currentTool,
      data: ctx.getImageData(0, 0, canvas.current.width, canvas.current.height),
      imgsrc: { src },
      config: {
        x: updatedX,
        y: updatedY,
        w: updatedW,
        h: updatedH,
      },
    });
    console.log(currentHistory);
  }

  function registMouseDownDrag(onDragChange, stopPropagation) {
    return {
      onMouseDown: (clickEvent) => {
        if (stopPropagation) clickEvent.stopPropagation();

        const mouseMoveHandler = (moveEvent) => {
          const deltaX = moveEvent.clientX - clickEvent.clientX;
          const deltaY = moveEvent.clientY - clickEvent.clientY;
          onDragChange(deltaX, deltaY);
        };

        const mouseUpHandler = () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
          setCurrentTool({
            ...currentTool,
            config: { x: updatedX, y: updatedY, w: updatedW, h: updatedH },
          });
          pushImageConfigToHistory();
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler, { once: true });
      },
    };
  }

  useEffect(() => {
    if (initialPosition) {
      setConfig(initialPosition);
    }
  }, [initialPosition]);

  useEffect(() => {
    const boundary = boundaryRef.current?.getBoundingClientRect();

    if (boundary) {
      const DEFAULT_W = width;
      const DEFAULT_H = height;
      setConfig({
        x: 0,
        y: 0,
        w: DEFAULT_W,
        h: DEFAULT_H,
      });
    }
  }, [width, height]);

  return (
    <div
      ref={boundaryRef}
      className={`z-[99] flex flex-col justify-center items-center ${className}`}
    >
      <div
        style={{ width: w, height: h, left: x, top: y }}
        className="relative cursor-move"
        {...registMouseDownDrag((deltaX, deltaY) => {
          if (!boundaryRef.current) return;
          const boundary = boundaryRef.current.getBoundingClientRect();
          updatedX = inrange(
            x + deltaX,
            -(boundary.width - w - BOUNDARY_MARGIN),
            boundary.width - w - BOUNDARY_MARGIN
          );
          updatedY = inrange(
            y + deltaY,
            -(boundary.height - h - BOUNDARY_MARGIN),
            boundary.height - h - BOUNDARY_MARGIN
          );

          setConfig({
            x: inrange(
              x + deltaX,
              -(boundary.width - w - BOUNDARY_MARGIN),
              boundary.width - w - BOUNDARY_MARGIN
            ),
            y: inrange(
              y + deltaY,
              -(boundary.height - h - BOUNDARY_MARGIN),
              boundary.height - h - BOUNDARY_MARGIN
            ),
            w,
            h,
          });
        }, true)}
      >
        <img
          ref={boxRef}
          className="absolute border-2 select-none"
          src={src}
          style={{
            transform: ``,
            objectFit: "fill",
            backgroundRepeat: "no-repeat",
            width: w,
            height: h,
          }}
          draggable="false"
        />
        <div
          className="absolute -bottom-0.5 right-0 cursor-se-resize bg-black-900 opacity-50 w-3 h-3"
          {...registMouseDownDrag((deltaX, deltaY) => {
            if (!boundaryRef.current) return;
            const boundary = boundaryRef.current.getBoundingClientRect();
            updatedW = inrange(
              w + deltaX,
              MIN_W,
              boundary.width - x - BOUNDARY_MARGIN
            );
            updatedH = inrange(
              h + deltaY,
              MIN_H,
              boundary.height - y - BOUNDARY_MARGIN
            );
            setConfig({
              x,
              y,
              w: inrange(
                w + deltaX,
                MIN_W,
                boundary.width - x - BOUNDARY_MARGIN
              ),
              h: inrange(
                h + deltaY,
                MIN_H,
                boundary.height - y - BOUNDARY_MARGIN
              ),
            });
          }, true)}
        ></div>
      </div>
    </div>
  );
};
