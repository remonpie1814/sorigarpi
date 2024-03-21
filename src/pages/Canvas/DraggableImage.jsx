import React, { useEffect, useRef, useState } from "react";

// 참조 https://bepyan.github.io/blog/dnd-master/1-drag-event
export const DraggableImage = ({ src, width, height, className }) => {
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
    console.log(v, min, max);
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

  return (
    <div
      ref={boundaryRef}
      className={`z-[99] bg-gray-600 flex flex-col justify-center items-center ${className}`}
    >
      <div
        style={{ width: w, height: h, left: x, top: y }}
        className="relative cursor-move"
        {...registMouseDownDrag((deltaX, deltaY) => {
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
        })}
      >
        <img
          ref={boxRef}
          className="absolute bg-white-A700 border-2 select-none"
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

function registMouseDownDrag(onDragChange, stopPropagation) {
  return {
    onMouseDown: (clickEvent) => {
      // 2️⃣
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = (moveEvent) => {
        const deltaX = moveEvent.clientX - clickEvent.clientX;
        const deltaY = moveEvent.clientY - clickEvent.clientY;
        onDragChange(deltaX, deltaY);
      };

      const mouseUpHandler = () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}
