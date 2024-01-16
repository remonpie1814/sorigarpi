import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";
import Modal from "components/Modal";

const Page1Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[32%]"
      overlayClassName="bg-black-900_75 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <Modal className="bg-white-A700 flex flex-col h-[300px] md:h-auto items-center justify-start md:px-5 w-[600px] md:w-full" />
      </div>
    </ModalProvider>
  );
};

export default Page1Modal;
