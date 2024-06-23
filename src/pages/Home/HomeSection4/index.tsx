import React from "react";

const HomeSection4: React.FC = () => {
  return (
    <section className="container py-20">
      <section className="flex justify-evenly items-end">
        <div className="mr-10 pb-5">
          <h5 className="text-app-blue font-bold text-2xl">
            자신이 원하는 스타일
          </h5>
          <p className="text-2xl font-bold">
            원하는 스타일이 있으신가요? <br />
            본인과 맞는 위즈를 선택해 <br />
            상담을 받아보세요.
          </p>
        </div>
        <div>
          <img
            width={500}
            src="src/assets/Home/home-section4-1.jpg"
            alt="자신이 원하는 스타일 이미지"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
      <section>
        <div>
          <h5 className="text-app-blue font-bold text-2xl">대면 상담 가능</h5>
          <p>
            온라인으로 상담을 받아도 모르겠나요? <br />
            괜찮아요, 만남이 가능한 위즈와 함께 <br />
            변신을 해보세요.
          </p>
        </div>
        <div>사진</div>
      </section>
      <section>
        <div>
          <h5 className="text-app-blue font-bold text-2xl">커뮤니티 활성화</h5>
          <p>
            상담으로는 부족한가요?
            <br />
            패션에 열정을 가진 사람들과 대화를 <br />
            통해 변신할 준비를 해보세요.
          </p>
        </div>
        <div>사진</div>
      </section>
    </section>
  );
};

export default HomeSection4;
