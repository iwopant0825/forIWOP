import styled from "styled-components";
import TapieLogo from "/tapieWhite.svg";
export default function Section8() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <SmallTitle>NOW 2024~</SmallTitle>
        <SmallconText>
          TAPIE {"(이하 “테이피”)"} 는 선린인터넷고등학교 앱 개발 · 창업 동아리
          App:ple Pi, 모바일 콘텐츠 개발 동아리 EDCAN, 크로스 플랫폼 개발 · 연구
          동아리 IWOP, 이 세 동아리가 병합되어 2024년 새로 세워진 소프트웨어과
          소속 전공동아리입니다.
        </SmallconText>
      </div>
      <ImageContainer>
        <ResponsiveImage src={TapieLogo} alt="Tapie Logo" />
      </ImageContainer>
      <Title>TAPE THE GAP BETWEEN THE WORLD </Title>
    </Layout>
  );
}
const Title = styled.span`
  color: #bbb;
  font-family: "Pretendard-Regular";
  text-align: center;
  font-size: 4vw;
  margin-top:40px;
`;

const SmallTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8vw;
  font-family: "Pretendard-Bold";
  color: #ffffff;
`;
const SmallconText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 21px;
  width: 70%;
  margin-top: 20px;
  color: #86868b;
  text-align: center;
`;

const Layout = styled.div`
  padding: 170px 130px;
  @media (max-width: 1200px) {
    padding: 150px 100px;
  }
  @media (max-width: 992px) {
    padding: 130px 70px;
  }
  @media (max-width: 768px) {
    padding: 100px 40px;
  }
  @media (max-width: 576px) {
    padding: 70px 20px;
  }
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;
