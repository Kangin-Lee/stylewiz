/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "btn-black": "#383838",
        "app-blue": "#3182F6",
        "app-store": "#1C90F5",
        "home-section3": "#f5f6f7",
        "footer-back": "#403F3F",
        facebook: "#0862f6",
        youtude: "#f60000",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
        logo: ["Unica One", "sans-serif"],
      },
      container: {
        center: true, // 모든 container를 자동으로 중앙 정렬
        padding: "1rem", // 기본 padding 설정
        screens: {
          sm: "100%", // 작은 화면에서 최대 너비
          md: "100%", // 중간 화면에서 최대 너비
          lg: "1024px", // 큰 화면에서 최대 너비
          xl: "1280px", // 더 큰 화면에서 최대 너비
        },
      },
      backgroundImage: {
        "home-background": 'url("src/assets/background/home-background.jpg")',
        "home-smile": 'url("src/assets/Home/smile-section6.jpg")',
        "home-good":
          'url("https://img.hankyung.com/photo/201910/AA.20694611.1.jpg")',
      },
    },
  },
  plugins: [],
};
