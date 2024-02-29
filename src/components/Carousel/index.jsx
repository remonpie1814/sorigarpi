import React, { useEffect, useState } from "react";
import { Img } from "components";

const Carousel = ({ images }) => {
  const [num, setNum] = useState(1);
  const cloneImages = [images[images.length - 1], ...images, images[0]];
  const lastImage = cloneImages.length - 1;
  const [transitionStatus, setTransitionStatus] = useState(true);

  //to-do 드래그로 배너 넘기기 구현

  //effects
  useEffect(() => {
    console.log("라스트이미지" + lastImage);
    if (num == lastImage) handlerOriginSlide(1);
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
  //자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => num + 1);
      setTransitionStatus(true);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="relative w-full">
        <div className="flex flex-row overflow-hidden h-[400px] md:h-[200px]">
          {cloneImages.map((image, i) => {
            return (
              <>
                <Img
                  className={`-translate-x-[${num}00%] ${
                    transitionStatus ? "transition delay-200 ease-in-out" : null
                  } object-cover`}
                  src={image.src}
                  alt={image.alt}
                />
              </>
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
