import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";
const EditSoundEffect = React.lazy(() => import("pages/EditSoundEffect"));
const EditRecord = React.lazy(() => import("pages/EditRecord"));
const Canvas = React.lazy(() => import("pages/Canvas"));
const TaleSetting = React.lazy(() => import("pages/TaleSetting"));
const RegisterCompleted = React.lazy(() => import("pages/RegisterCompleted"));
const PwdResetForm = React.lazy(() => import("pages/PwdResetForm"));
const RegisterForm = React.lazy(() => import("pages/RegisterForm"));
const LoginForm = React.lazy(() => import("pages/LoginForm"));
const PwdSendEmailForm = React.lazy(() => import("pages/PwdSendEmailForm"));
const TemporaryStorageDelete = React.lazy(() =>
  import("pages/TemporaryStorageDelete")
);
const TempTaleList = React.lazy(() => import("pages/TempTaleList"));
const RecentView = React.lazy(() => import("pages/RecentView"));
const NoticeList = React.lazy(() => import("pages/NoticeList"));
const NoticeDetail = React.lazy(() => import("pages/NoticeDetail"));
const MyReplyList = React.lazy(() => import("pages/MyReplyList"));
const PwdModifyForm = React.lazy(() => import("pages/PwdModifyForm"));
const Main = React.lazy(() => import("pages/Main"));
const MyLibrary = React.lazy(() => import("pages/MyLibrary"));
const CustomerService = React.lazy(() => import("pages/CustomerService"));
const InquiryForm = React.lazy(() => import("pages/InquiryForm"));
const InquiryHistory = React.lazy(() => import("pages/InquiryHistory"));
const AccountInformation = React.lazy(() => import("pages/AccountInformation"));
const SanctionHistory = React.lazy(() => import("pages/SanctionHistory"));
const ProfileModifyForm = React.lazy(() => import("pages/ProfileModifyForm"));
const ProfilePictureModifyForm = React.lazy(() =>
  import("pages/ProfilePictureModifyForm")
);
const FollowingTale = React.lazy(() => import("pages/FollowingTale"));
const LikedTale = React.lazy(() => import("pages/LikedTale"));
const Profile = React.lazy(() => import("pages/Profile"));
const FollowList = React.lazy(() => import("pages/FollowList"));
const SearchResult = React.lazy(() => import("pages/SearchResult"));
const TaleDetail = React.lazy(() => import("pages/TaleDetail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/taledetail" element={<TaleDetail />} />
            <Route path="/searchresult" element={<SearchResult />} />
            <Route path="/followlist" element={<FollowList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/likedtale" element={<LikedTale />} />
            <Route path="/followingtale" element={<FollowingTale />} />
            <Route
              path="/profilepicturemodifyform"
              element={<ProfilePictureModifyForm />}
            />
            <Route path="/profilemodifyform" element={<ProfileModifyForm />} />
            <Route path="/sanctionhistory" element={<SanctionHistory />} />
            <Route
              path="/accountinformation"
              element={<AccountInformation />}
            />
            <Route path="/inquiryhistory" element={<InquiryHistory />} />
            <Route path="/inquiryform" element={<InquiryForm />} />
            <Route path="/customerservice" element={<CustomerService />} />
            <Route path="/mylibrary" element={<MyLibrary />} />
            <Route path="/main" element={<Main />} />
            <Route path="/pwdmodifyform" element={<PwdModifyForm />} />
            <Route path="/myreplylist" element={<MyReplyList />} />
            <Route path="/noticedetail" element={<NoticeDetail />} />
            <Route path="/noticelist" element={<NoticeList />} />
            <Route path="/recentview" element={<RecentView />} />
            <Route path="/temptalelist" element={<TempTaleList />} />
            <Route
              path="/temporarystoragedelete"
              element={<TemporaryStorageDelete />}
            />
            <Route path="/pwdsendemailform" element={<PwdSendEmailForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/registerform" element={<RegisterForm />} />
            <Route path="/pwdresetform" element={<PwdResetForm />} />
            <Route path="/registercompleted" element={<RegisterCompleted />} />
            <Route path="/talesetting" element={<TaleSetting />} />
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/editrecord" element={<EditRecord />} />
            <Route path="/editsoundeffect" element={<EditSoundEffect />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
