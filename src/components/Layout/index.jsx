import { MainHeader, Navbar, Footer } from "components";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <MainHeader className="bg-white-A700 flex flex-col items-center justify-start p-[25px] sm:px-5 w-full" />
        <Navbar className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full" />
        {children}
        <Footer
          className="w-full flex gap-2.5 items-center justify-center
                  bg-blue_gray-50_02 md:px-5"
        />
      </div>
    </>
  );
};
export { Layout };
