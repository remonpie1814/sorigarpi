import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/taledetail">TaleDetail</Link>
        </li>
        <li>
          <Link to="/searchresult">SearchResult</Link>
        </li>
        <li>
          <Link to="/followlist">FollowList</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/likedtale">LikedTale</Link>
        </li>
        <li>
          <Link to="/followingtale">FollowingTale</Link>
        </li>
        <li>
          <Link to="/profilepicturemodifyform">ProfilePictureModifyForm</Link>
        </li>
        <li>
          <Link to="/profilemodifyform">ProfileModifyForm</Link>
        </li>
        <li>
          <Link to="/sanctionhistory">SanctionHistory</Link>
        </li>
        <li>
          <Link to="/accountinformation">AccountInformation</Link>
        </li>
        <li>
          <Link to="/inquiryhistory">InquiryHistory</Link>
        </li>
        <li>
          <Link to="/inquiryform">InquiryForm</Link>
        </li>
        <li>
          <Link to="/customerservice">CustomerService</Link>
        </li>
        <li>
          <Link to="/mylibrary">MyLibrary</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/pwdmodifyform">PwdModifyForm</Link>
        </li>
        <li>
          <Link to="/myreplylist">MyReplyList</Link>
        </li>
        <li>
          <Link to="/noticedetail">NoticeDetail</Link>
        </li>
        <li>
          <Link to="/noticelist">NoticeList</Link>
        </li>
        <li>
          <Link to="/recentview">RecentView</Link>
        </li>
        <li>
          <Link to="/temptalelist">TempTaleList</Link>
        </li>
        <li>
          <Link to="/temporarystoragedelete">TemporaryStorageDelete</Link>
        </li>
        <li>
          <Link to="/pwdsendemailform">PwdSendEmailForm</Link>
        </li>
        <li>
          <Link to="/loginform">LoginForm</Link>
        </li>
        <li>
          <Link to="/registerform">RegisterForm</Link>
        </li>
        <li>
          <Link to="/pwdresetform">PwdResetForm</Link>
        </li>
        <li>
          <Link to="/registercompleted">RegisterCompleted</Link>
        </li>
        <li>
          <Link to="/talesetting">TaleSetting</Link>
        </li>
        <li>
          <Link to="/canvas">Canvas</Link>
        </li>
        <li>
          <Link to="/editrecord">EditRecord</Link>
        </li>
        <li>
          <Link to="/editsoundeffect">EditSoundEffect</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
