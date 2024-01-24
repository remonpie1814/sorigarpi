import { Button } from "components";

const TabButton = ({ className, children, index, tab, setTab }) => {
  return (
    <Button
      className={`cursor-pointer min-w-[100px]
                 text-base text-center tracking-[-0.30px]
                 ${className}
                ${tab === index ? "border-b-2 font-bold" : null}`}
      shape="square"
      size="xs"
      onClick={() => {
        setTab(index);
      }}
    >
      {children}
    </Button>
  );
};

export { TabButton };
