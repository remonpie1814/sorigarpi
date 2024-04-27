import { CanvasContext } from "contexts";
import React, { useContext, useEffect, useRef, useState } from "react";

// 참조 https://bepyan.github.io/blog/dnd-master/1-drag-event
export const DraggableImage = ({
  src,
  width,
  height,
  className,
  drawImage,
  putImageData,
}) => {
  const { currentTool, setCurrentTool, currentHistory, setCurrentHistory } =
    useContext(CanvasContext);
  const [baseLayerImg, setBaseLayerImg] = useState();

  const [{ x, y, w, h }, setConfig] = useState({
    x: 0,
    y: 0,
    w: width,
    h: height,
  });
  const boxRef = useRef(null);
  const boundaryRef = useRef(null);

  const BOUNDARY_MARGIN = 0;
  const MIN_W = 80;
  const MIN_H = 80;

  const inrange = (v, min, max) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
  };

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

  useEffect(() => {
    setBaseLayerImg(currentHistory[currentHistory.length - 1]?.data);
  }, []);

  return (
    <div
      ref={boundaryRef}
      className={`z-[99] flex flex-col justify-center items-center ${className}`}
    >
      <div
        style={{ width: w, height: h, left: x, top: y }}
        className="relative cursor-move"
        {...registMouseDownDrag(
          (deltaX, deltaY) => {
            if (!boundaryRef.current) return;

            const boundary = boundaryRef.current.getBoundingClientRect();
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
          },
          true,
          () => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setCurrentTool({
                ...currentTool,
                config: { x: x, y: y, w: w, h: h },
              });
              drawImage(img, x, y, w, h);
            };
          }
        )}
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
          {...registMouseDownDrag(
            (deltaX, deltaY) => {
              if (!boundaryRef.current) return;

              const boundary = boundaryRef.current.getBoundingClientRect();
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
            },
            true,
            () => {
              setCurrentTool({
                ...currentTool,
                config: { x: x, y: y, w: w, h: h },
              });
            }
          )}
        ></div>
      </div>
    </div>
  );
};

function registMouseDownDrag(onDragChange, stopPropagation, onMouseUp) {
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
        onMouseUp();
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}
