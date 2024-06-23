import React from "react";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-back py-11">
      <div className="container text-neutral-300 flex flex-col">
        {/* 로고 부분------------------- */}
        <section className="text-zinc-300 text-3xl font-logo">
          <p>STYLEWIZ</p>
        </section>

        {/* 푸터 메인--------------------- */}
        <section className="flex justify-between mb-8 mt-3">
          {/* 왼쪽 컨텐츠 */}
          <div>
            <p>주식회사 스타일위즈 | 대표자명: 이강인 | 개인정보</p>
            <p>사업자등록번호: 000-00-000000 | 이메일: kangin@stylewiz.co.kr</p>
            <p>주소: 대전광역시 유성구 과학로 125-48 위즈빌딩</p>
          </div>

          {/* 가운데 컨텐츠 */}
          <div>
            <p>이용약관 | 법적고지</p>
            <p>개인정보처리방침</p>
            <p>이메일무단수집거부</p>
            <p>FAQ</p>
          </div>

          {/* 오른쪽 컨텐츠 */}
          <div className="text-end">
            <div className="flex justify-end text-4xl mb-4">
              <FaInstagram className="mr-3 hover:text-neutral-400 transition duration-200 ease-in-out" />
              <FaFacebookSquare className="mr-3 hover:text-neutral-400 transition duration-200 ease-in-out" />
              <FaYoutube className="hover:text-neutral-400 transition duration-200 ease-in-out" />
            </div>
            <p>
              StyleWiz : <br />
              Your personal stylist for <br />
              magical fashion transformations
            </p>
          </div>
        </section>

        {/* copyright--------------------- */}
        <section>
          <p>Copyrigth 2024. StyleWiz all right reserved.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
