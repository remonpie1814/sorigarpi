const AutoResizingTextarea = ({
  children,
  className,
  setValue,
  rows,
  placeholder,
  handleSubmit,
}) => {
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
          className={`resize-none overflow-hidden flex-grow`}
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
