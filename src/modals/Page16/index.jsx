import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";
import Modal2 from "components/Modal2";

const Page16Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[32%]"
      overlayClassName="bg-black-900_75 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <Modal2
          className="bg-white-A700 flex flex-col h-[300px] md:h-auto items-center justify-start md:px-5 w-[600px] md:w-full"
          userimage="images/img_image936_87x165.png"
          confirmationtext="효과음을 저장하시겠습니까?"
        />
      </div>
    </ModalProvider>
  );
};

export default Page16Modal;
