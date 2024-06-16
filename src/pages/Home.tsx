import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* 그라데이션을 적용할 div */}
      <div className="bg-gradient-to-b from-white to-transparent absolute inset-0 z-10 h-3/4"></div>
      <Navbar className="z-30" /> {/* Navbar에 z-index 추가 */}
      {/* 배경 이미지가 들어갈 div */}
      <div className="bg-home-background h-screen relative z-0">
        {/* 여기에 다른 컨텐츠를 추가할 수 있습니다 */}
      </div>
    </div>
  );
};

export default Home;
