// children : 이 컴포넌트의 자식 요소. textarea의 오른쪽에 표시됨.
// 이것 또한 입력 시 height가 resizing 됨.
// handleSubmit : textarea의 내용을 submit하는 함수.
// ctrl+Enter를 눌렀을 때 handleSubmit이 실행됨.
// setValue : textarea에 입력된 내용을 가지고 뭔가 하는 함수.
// 주로 부모 컴포넌트에서 state로 set하는 함수가 될 듯 함.

import { useEffect, useRef } from "react";

const AutoResizingTextarea = ({
  children,
  className,
  setValue,
  rows,
  placeholder,
  handleSubmit,
}) => {
  const textareaRef = useRef();

  useEffect(() => {
    const parentElement = textareaRef.current.parentElement;
    parentElement.style.height = `${textareaRef.current.scrollHeight}px`;
  }, []);

  const handleInput = (event) => {
    event.target.parentElement.style.height = "auto";
    event.target.parentElement.style.height = `${event.target.scrollHeight}px`;
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <>
      <div className={`flex flex-row ${className}`}>
        <textarea
          ref={textareaRef}
          className={`resize-none overflow-hidden flex-grow h-full`}
          rows={rows}
          placeholder={placeholder}
          onInput={(e) => {
            handleInput(e);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.ctrlKey) {
              if (handleSubmit) {
                event.preventDefault();
                handleSubmit();
              }
            }
          }}
        />
        {children}
      </div>
    </>
  );
};

AutoResizingTextarea.defaultProps = {
  placeholder: "값 입력...",
  rows: 1,
};

export { AutoResizingTextarea };
