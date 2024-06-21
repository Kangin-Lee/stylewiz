import React from "react";
import { FaSun } from "react-icons/fa6";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "홈", link: "/" },
  { name: "위즈", link: "/wiz" },
  { name: "중고거래", link: "/used" },
  { name: "커뮤니티", link: "/community" },
  { name: "찜", link: "/wishlist" },
  { name: "공지사항", link: "/notices" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto pt-3">
      <img className="w-44" src="src/assets/logo/logo.png" alt="메인로고" />
      <div className="flex items-center">
        <ul className="flex">
          {navItems.map((list) => (
            <li className="mr-5 font-medium cursor-pointer text-lg hover:text-app-blue hover:font-bold">
              {list.name}
            </li>
          ))}
        </ul>
        <button className="p-3 bg-app-blue text-orange-400 rounded-full text-xl">
          <FaSun />
        </button>
        <button className="bg-btn-black text-sm py-1.5 px-4 ml-7 text-white font-bold rounded-md shadow-md">
          로그인
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
