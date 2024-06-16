import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>로고</div>
      <div className="flex items-center">
        <ul className="flex">
          <li>홈</li>
          <li>위즈</li>
          <li>중고거래</li>
          <li>커뮤니티</li>
          <li>찜</li>
          <li>공지사항</li>
        </ul>
        <button className="bg-btn-black py-2 px-4 ml-8 text-white">
          로그인
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
