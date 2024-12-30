import styled from "styled-components";

export default function Section4() {
  return (
    <Layout>
      <Left>
        <Text>
          IWOP은 2001년 설립된 소프트웨어과{" "}
          <HightText>유일의 웹 개발 동아리로</HightText>, 지금까지 지속적으로
          우수한 실적을 내며 소프트웨어과 학생들의 웹 개발 역량을 한층
          높여왔습니다.
        </Text>
        <Text>
          또한 IWOP은 소프트웨어과에서 가장 오래된 동아리로서,{" "}
          <HightText>다양한 경험과 노하우를 쌓아온 경험있는</HightText>{" "}
          동아리입니다. IWOP은 최신 기술을 적용하여
          <HightText>창의적이고 혁신적인 웹 개발 프로젝트</HightText>를
          수행하며, 학교 내외에서 다양한 수상과 입상 경력을 쌓고 있습니다.
        </Text>
      </Left>
      <Right>
        <Text>
          많은 부원들이 IWOP에서 성장하고, 성공의 발판을 마련했습니다. 함께
          <HightText>IWOP에서 멋진 경험과 기술</HightText>을 쌓아나가 보시길
          바랍니다.
        </Text>
      </Right>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height:1400px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    height:800px;
  }
  @media (max-width: 600px) {
    height:400px;
  }
  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
  }

  @media (min-width: 1440px) {
    padding: 0 330px;
  }
`;
const Text = styled.div`
  font-family: "Pretendard-Bold";
  color: #86868b;
  font-size: 2vw;
  width: 40%;
  @media (max-width: 600px) {
    width: 70%;
  }

`;
const HightText = styled.span`
  font-family: "Pretendard-Bold";
  color: #000000;
`;
const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  align-items: center;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;
