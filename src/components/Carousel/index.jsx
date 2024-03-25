import React, { useEffect, useState, useRef } from "react";
import { Img } from "components";

const Carousel = ({ images }) => {
  const imageBox = useRef(null);
  const [num, setNum] = useState(1);
  const cloneImages = [images[images.length - 1], ...images, images[0]];
  const lastImage = cloneImages.length - 1;
  const [transitionStatus, setTransitionStatus] = useState(true);

  const moveStyle = {
    0: "translate-x-[-400%]",
    1: "translate-x-[-100%]",
    2: "translate-x-[-200%]",
    3: "translate-x-[-300%]",
    4: "translate-x-[-400%]",
    5: "translate-x-[-100%]",
  };

  //to-do 드래그로 배너 넘기기 구현

  //effects
  useEffect(() => {
    console.log(num);
    console.log(images[1].src);
    if (num === lastImage) handlerOriginSlide(1);
    else if (num === 0) handlerOriginSlide(lastImage - 1);
  }, [cloneImages.length, lastImage, num]);

  //handlers
  function handlerSlide(direction) {
    direction === "prev" ? setNum((num) => num - 1) : setNum((num) => num + 1);
    setTransitionStatus(true);
  }
  function handlerOriginSlide(index) {
    setTimeout(() => {
      setNum(index);
      setTransitionStatus(false);
    }, 400);
  }
  // 자동 슬라이드
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setNum((num) => num + 1);
  //     setTransitionStatus(true);
  //   }, 4000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex h-[400px] md:h-[200px] ${moveStyle[num]} ${
            transitionStatus ? "transition delay-200 ease-in-out" : null
          } `}
          ref={imageBox}
        >
          {cloneImages.map((image, i) => {
            return (
              <img
                key={i}
                src={image.src}
                alt={image.alt}
                className="object-cover"
              />
            );
          })}
        </div>
        <div className="absolute bottom-5 left-[50%] ml-[-36px] flex flex-row gap-3">
          {images.map((dot) => {
            return (
              <div
                className={`w-2 h-2 rounded-full cursor-pointer  ${
                  num === dot.id ? "bg-white-A700" : "bg-gray-400_02"
                }`}
                onClick={() => {
                  setNum(dot.id);
                }}
              ></div>
            );
          })}
        </div>
        <Img
          className="absolute left-[20%] top-[50%] mt-[-32px] cursor-pointer"
          src="images/prev.png"
          alt="prev"
          onClick={() => {
            handlerSlide("prev");
          }}
        />{" "}
        <Img
          className="absolute right-[20%] top-[50%] mt-[-32px] cursor-pointer"
          src="images/next.png"
          alt="next"
          onClick={() => {
            handlerSlide("next");
          }}
        />
      </div>
    </>
  );
};
export { Carousel };
