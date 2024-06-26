import React from "react";
import Navbar from "../../../components/Navbar";
import { FaApple } from "react-icons/fa";

const HomeSection1: React.FC = () => {
  return (
    <section className="relative">
      {/* 그라데이션을 적용할 div */}
      {/* <div className="bg-gradient-to-b from-white to-transparent absolute inset-0 z-10 h-3/4"></div> */}
      <Navbar /> {/* Navbar에 z-index 추가 */}
      {/* 배경 이미지가 들어갈 div */}
      <div className="bg-home-background h-screen relative z-0 bg-center bg-no-repeat bg-cover">
        {/* 메인 화면 텍스트----------------- */}
        <div className="text-center pt-40">
          <p className="font-logo text-9xl">STYLEWIZ</p>
          <p className="text-7xl font-bold mt-3">
            간편한 스타일리스트 매칭 서비스
          </p>
        </div>

        {/* 위즈찾기 인풋창----------------------- */}
        <div className="flex justify-center my-7">
          <input
            type="text"
            className="w-96 h-14 rounded-l-lg outline-none pl-3"
          />
          <button className="bg-app-blue text-white px-5 text-lg font-bold rounded-r-lg hover:bg-blue-400 transition duration-200 ease-in-out">
            위즈 찾기
          </button>
        </div>

        {/* 구글플레이 앱 스토어 버튼------------ */}
        <div className="flex justify-center">
          <button className="w-44 bg-app-store text-white h-14 font-bold text-xl rounded-lg opacity-80 mr-4 flex justify-center items-center">
            <FaApple className="text-3xl mr-2" />
            App Store
          </button>
          <button className="w-44 bg-white h-14 font-bold text-xl rounded-lg opacity-80 flex justify-center items-center">
            <img
              width={25}
              src="src/assets/logo/googleplay-logo.png"
              className="mr-2"
            />
            Google Play
          </button>
        </div>

        {/* 위즈 둘러보기, 신청 바로가기 링크------------ */}
        <div className="flex justify-center mt-3">
          <a className="font-bold border-b-2 border-black mr-4 text-lg">
            위즈 둘러보기
          </a>
          <a className="font-bold border-b-2 border-black mr-4 text-lg">
            위즈 신청하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
