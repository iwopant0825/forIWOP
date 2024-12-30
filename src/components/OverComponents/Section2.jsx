import styled from "styled-components";

export default function Section2() {
  return (
    <Layout>
      <Group>
        <Title>선린인터넷고등학교 웹 개발 전문 동아리</Title>
        <ConText>
          <HighLight>I</HighLight>
          NTERNET&nbsp;&nbsp;&nbsp;&nbsp;<HighLight>W</HighLight>
          ORLD&nbsp;&nbsp;&nbsp;&nbsp;<HighLight>O</HighLight>
          PERATION&nbsp;&nbsp;&nbsp;&nbsp;<HighLight>P</HighLight>EOPLE
        </ConText>
      </Group>
    </Layout>
  );
}
const Layout = styled.div`
  height: 100dvh;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
`;
const Title = styled.div`
  font-size: calc(13px + 1vw);
  font-family: "Pretendard-Bold";
`;
const ConText = styled.div`
  font-size: calc(13px + 1vw);
  font-family: "Pretendard-Bold";
`;
const HighLight = styled.span`
  font-family: "Pretendard-Bold";
  color: #22E400;
`;
