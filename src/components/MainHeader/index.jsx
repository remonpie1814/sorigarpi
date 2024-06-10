//** 외곽선 없앰 */

import React, { useState } from "react";

import { Img, MainAlert, SearchMobile } from "components";
import PageDrawer from "drawers/Page";
import { useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const [isOpneAlert, setOpenAlert] = useState(false);
  const [isOpenPageDrawer, setPageDrawer] = useState(false);
  const [isOpenSearch, setSearch] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-[64%] md:w-full md:gap-10">
          <div
            className="flex flex-col items-center justify-center w-auto cursor-pointer"
            onClick={() => {
              navigate("/main");
            }}
          >
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="/images/img__51x170.png"
              alt="sorigalpi logo"
            />
          </div>
          <div className="relative flex flex-row gap-2.5 items-center justify-center py-2.5 w-auto">
            {isOpneAlert ? (
              <MainAlert onClose={() => setOpenAlert(false)}></MainAlert>
            ) : (
              <Img
                className="object-cover w-12 h-12 cursor-pointer md:h-auto"
                src="/images/img_bell111.png"
                alt="bell button"
                onClick={() => {
                  setOpenAlert(true);
                }}
              />
            )}

            {isOpenSearch ? (
              <>
                <div
                  className="relative flex flex-row h-[48px] sm:hidden"
                  onMouseLeave={() => {
                    if (searchWord == "") {
                      setSearch(false);
                    }
                  }}
                >
                  <input
                    className="flex flex-row px-3 border rounded-full"
                    onChange={(e) => {
                      setSearchWord(e.target.value);
                    }}
                  />
                  <Img
                    className="absolute right-0 object-cover w-12 h-12 cursor-pointer md:h-auto"
                    src="/images/img_search111.png"
                    alt="search button"
                    onClick={() => {
                      if (searchWord.length == 0) {
                        alert("검색어를 입력해 주세요");
                      }
                      //to-do 검색어 전송하는 함수
                    }}
                  />
                </div>
                <SearchMobile onClose={() => setSearch(false)} />
              </>
            ) : (
              <Img
                className="flex flex-row object-cover w-12 h-12 cursor-pointer md:h-auto"
                src="/images/img_search111.png"
                alt="search button"
                onClick={() => {
                  setSearch(true);
                }}
              />
            )}
            <Img
              className="object-cover w-12 h-12 cursor-pointer md:h-auto"
              src="/images/img_menu11.png"
              alt="menu button"
              onClick={() => {
                setPageDrawer(true);
              }}
            />
            {isOpenPageDrawer}
          </div>
        </div>
      </div>
      {isOpenPageDrawer ? (
        <PageDrawer
          open={isOpenPageDrawer}
          onClose={() => setPageDrawer(false)}
        />
      ) : null}
    </>
  );
};

export { MainHeader };
