import React, { useState } from "react";

import {
  AutoResizingTextarea,
  Button,
  Img,
  ReportModal,
  Text,
} from "components";

const TaleDetailReplyerow = ({
  className,
  profileImage,
  commentId,
  commenter,
  content,
  creDate,
}) => {
  // 각 댓글의 답글 텍스트박스 열림 state
  const [isOpen, setOpen] = useState(false);
  // ... 버튼 눌렀을 때의 모달
  const [replyModal, setReplyModal] = useState(false);
  // 수정 모드인지 관리하는 state. true이면 댓글 내용 대신 텍스트박스 표시.
  const [isEdit, setEdit] = useState(false);
  // 수정 박스에 입력한 내용 저장 state
  const [newComment, setNewComment] = useState(content);
  // 신고하기 모달창
  const [reportModal, setReportModal] = useState(false);
  // 댓글의 답글 저장 state
  const [rereply, setRereply] = useState("");

  // 댓글의 id와 수정 박스의 내용을 보내 백엔드에 댓글 수정을 요청하는 함수.
  // todo: 댓글 수정 함수 내용 채우기
  function handleEditComment(commentId, newComment) {
    console.log("입력한 내용 :" + newComment);
    console.log(commentId + "댓글 수정");
  }

  return (
    <>
      <div className={className}>
        <div className="flex flex-row gap-[9px] items-center justify-start w-full">
          <Img
            className="h-[45px] md:h-auto object-cover w-[45px]"
            src={profileImage}
            alt="Two"
          />
          <div className="flex flex-row flex-grow items-center">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterBold16"
            >
              {commenter}
            </Text>
            <Button
              className="ml-auto"
              onClick={() => {
                setReplyModal(true);
              }}
            >
              <Img
                className="h-5 md:h-auto object-cover w-5"
                src="images/img_menu1.png"
                alt="menuOne"
              />
            </Button>
          </div>
        </div>
        {isEdit ? (
          <>
            <AutoResizingTextarea
              className="gap-2 w-full"
              placeholder="수정 내용 입력..."
              setValue={setNewComment}
              value={content}
            >
              <Button
                className="border-2 px-2 bg-gray-400 rounded-md"
                onClick={() => {
                  handleEditComment(commentId, newComment);
                  setEdit(false);
                }}
              >
                수정
              </Button>
              <Button
                className="border-2 px-2 bg-white-A700 rounded-md"
                onClick={() => {
                  setNewComment(content);
                  setEdit(false);
                }}
              >
                취소
              </Button>
            </AutoResizingTextarea>
          </>
        ) : (
          <Text
            className="text-base text-gray-900 tracking-[-0.30px] w-full"
            size="txtInterMedium16"
          >
            {content}
          </Text>
        )}

        <Text
          className="text-gray-400 text-sm tracking-[-0.15px] w-full"
          size="txtInterMedium14Gray400"
        >
          {creDate}
        </Text>
        <Button
          className="text-base text-gray-900 tracking-[-0.18px]
                    text-left w-1/6 sm:w-full"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          답글
        </Button>
        {isOpen && (
          <form className="w-full pb-2">
            <AutoResizingTextarea
              className="gap-2"
              placeholder="답글 입력..."
              value={rereply}
              setValue={setRereply}
            >
              <Button
                className={`border-2 px-2 rounded-md 
              ${
                rereply.length > 0 && rereply.trim().length > 0
                  ? "bg-amber-A100"
                  : "bg-gray-100 cursor-default"
              }`}
              >
                작성
              </Button>
            </AutoResizingTextarea>
          </form>
        )}
      </div>
      {replyModal && (
        <ReplyModal
          commentId={commentId}
          setReplyModal={setReplyModal}
          setReportModal={setReportModal}
          setEdit={setEdit}
        />
      )}
      {reportModal && (
        <ReportModal
          type="comment"
          id={commentId}
          writer={commenter}
          content={content}
          closeModal={() => {
            setReportModal(false);
          }}
        />
      )}
    </>
  );
};

const ReplyModal = ({ commentId, setReplyModal, setReportModal, setEdit }) => {
  // 댓글을 삭제하는 함수.
  // todo: 댓글 삭제 함수 내용 채우기
  function handleDeleteComment(commentId) {
    console.log(commentId + " 댓글 삭제");
  }

  return (
    <>
      <div
        className="fixed w-screen h-screen top-0 left-0 z-10
           flex items-center justify-center"
      >
        <div
          className="fixed bg-black-900 opacity-50 w-screen h-screen top-0 left-0 z-0"
          onClick={() => {
            setReplyModal(false);
          }}
        ></div>
        <div
          className="flex flex-col gap-2 p-2
                        w-[200px] h-auto rounded-xl bg-white-A700
                        z-20"
        >
          <Button
            className="flex flex-row p-2"
            onClick={() => {
              setEdit(true);
              setReplyModal(false);
            }}
          >
            <img
              className="w-[20px]"
              src="/images/free-icon-edit-1159633.png"
              alt="편집버튼"
            />
            <span className="flex-grow">편집하기</span>
          </Button>
          <Button
            className="flex flex-row p-2"
            onClick={() => {
              handleDeleteComment(commentId);
            }}
          >
            <img
              className="w-[20px]"
              src="/images/free-icon-remove-4743202.png"
              alt="삭제버튼"
            />
            <span className="flex-grow">삭제하기</span>
          </Button>
          <Button
            className="flex flex-row p-2"
            onClick={() => {
              setReportModal(true);
              setReplyModal(false);
            }}
          >
            <img
              className="w-[20px]"
              src="/images/free-icon-problem-report-7689567.png"
              alt="신고버튼"
            />
            <span className="flex-grow">신고하기</span>
          </Button>
        </div>
      </div>
    </>
  );
};

TaleDetailReplyerow.defaultProps = {
  commenter: "댓글 작성자",
  content: "댓글 내용",
  creDate: "댓글을 단 일시",
  profileImage: "/images/img_2_45x45.png",
};

export default TaleDetailReplyerow;
