import styled from "styled-components";

export default function Section3() {
  return (
    <Layout>
      <Title>
        <Introduce>INTRODUCE</Introduce>
        <TitleText>
          2001년 설립된
          <br />
          소프트웨어과{" "}
          <TitleTextGradient>
            유일의
            <br />웹 개발 전공 동아리
          </TitleTextGradient>
        </TitleText>
      </Title>

      <SmallTitle>소프트웨어과에서 가장 오래된 동아리</SmallTitle>
      
    </Layout>
  );
}
const Layout = styled.div`
  padding: 0px 130px;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media (max-width: 992px) {
    padding: 0px 70px;
  }
  @media (max-width: 768px) {
    padding: 0px 40px;
  }
  @media (max-width: 576px) {
    padding: 0px 20px;
  }
`;

const SmallTitle = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 160px;
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 992px) {
    padding: 80px;
  }
  @media (max-width: 768px) {
    padding: 60px;
  }
  @media (max-width: 576px) {
    padding: 40px;
  }
`;

const Title = styled.div`
  flex-direction: column;
  display: flex;
`;
const Introduce = styled.span`
  font-size: 20px;
`;
const TitleText = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 8vw;
`;
const TitleTextGradient = styled.span`
  font-family: "Pretendard-Bold";
  background: linear-gradient(165deg, #22e400 23.12%, #00c3ff 79.58%);
  -webkit-background-clip: text;
  color: transparent;
`;
