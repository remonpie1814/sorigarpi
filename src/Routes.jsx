import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const Page17 = React.lazy(() => import("pages/Page17"));
const Page13 = React.lazy(() => import("pages/Page13"));
const Canvas = React.lazy(() => import("pages/Canvas"));
const TaleSetting = React.lazy(() => import("pages/TaleSetting"));
const RegisterCompleted = React.lazy(() => import("pages/RegisterCompleted"));
const PwdResetForm = React.lazy(() => import("pages/PwdResetForm"));
const RegisterForm = React.lazy(() => import("pages/RegisterForm"));
const Page11 = React.lazy(() => import("pages/Page11"));
const LoginForm = React.lazy(() => import("pages/LoginForm"));
const PwdSendEmailForm = React.lazy(() => import("pages/PwdSendEmailForm"));
const TemporaryStorageDelete = React.lazy(
  () => import("pages/TemporaryStorageDelete"),
);
const TempTaleList = React.lazy(() => import("pages/TempTaleList"));
const RecentView = React.lazy(() => import("pages/RecentView"));
const NoticeList = React.lazy(() => import("pages/NoticeList"));
const Page10 = React.lazy(() => import("pages/Page10"));
const MyReplyList = React.lazy(() => import("pages/MyReplyList"));
const PwdModifyForm = React.lazy(() => import("pages/PwdModifyForm"));
const Page9 = React.lazy(() => import("pages/Page9"));
const Page8 = React.lazy(() => import("pages/Page8"));
const CustomerService = React.lazy(() => import("pages/CustomerService"));
const InquiryForm = React.lazy(() => import("pages/InquiryForm"));
const InquiryHistory = React.lazy(() => import("pages/InquiryHistory"));
const AccountInformation = React.lazy(() => import("pages/AccountInformation"));
const SanctionHistory = React.lazy(() => import("pages/SanctionHistory"));
const Page7 = React.lazy(() => import("pages/Page7"));
const Page6 = React.lazy(() => import("pages/Page6"));
const Page5 = React.lazy(() => import("pages/Page5"));
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Page1 = React.lazy(() => import("pages/Page1"));
const TaleDetail = React.lazy(() => import("pages/TaleDetail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/taledetail" element={<TaleDetail />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/sanctionhistory" element={<SanctionHistory />} />
          <Route path="/accountinformation" element={<AccountInformation />} />
          <Route path="/inquiryhistory" element={<InquiryHistory />} />
          <Route path="/inquiryform" element={<InquiryForm />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/pwdmodifyform" element={<PwdModifyForm />} />
          <Route path="/myreplylist" element={<MyReplyList />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/noticelist" element={<NoticeList />} />
          <Route path="/recentview" element={<RecentView />} />
          <Route path="/temptalelist" element={<TempTaleList />} />
          <Route
            path="/temporarystoragedelete"
            element={<TemporaryStorageDelete />}
          />
          <Route path="/pwdsendemailform" element={<PwdSendEmailForm />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/pwdresetform" element={<PwdResetForm />} />
          <Route path="/registercompleted" element={<RegisterCompleted />} />
          <Route path="/talesetting" element={<TaleSetting />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page17" element={<Page17 />} />
          <Route path="/frameone" element={<FrameOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
