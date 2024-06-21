import React from "react";

const HomeSection3: React.FC = () => {
  return (
    <section className="bg-home-section3 ">
      <div className="container flex justify-center items-center">
        <div>
          <img
            width={800}
            src="src/assets/Home/home-review.PNG"
            className="mt-6"
          />
        </div>

        <div className="ml-12 flex flex-col">
          <div className="mb-16 pb-8 mt-6">
            <h3 className="text-2xl font-bold">누적 가입자</h3>
            <p className="text-app-blue font-bold text-7xl">500,000 +</p>
          </div>
          <div className="mb-16 pb-8">
            <h3 className="text-2xl font-bold">대기 중인 위즈 현황</h3>
            <p className="text-app-blue font-bold text-7xl">80,000 +</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">도움을 기다리는 사용자</h3>
            <p className="text-app-blue font-bold text-7xl">400,000 +</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
