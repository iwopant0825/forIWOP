import styled from "styled-components";

export default function Section1() {
  return (
    <Layout>
      {/* <Title>
        선린인터넷고등학교 웹 개발 전문 동아리
      </Title>
      <LeftText>
        HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;JAVASCRIPT
      </LeftText> */}
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height: 100dvh;
  position:relative;
`;

const Title = styled.div`
  position:absolute;
  width: 100%;
  display:flex;
  justify-content: center;
  font-size:30px;
  margin-top:200px;
  font-family:'Pretendard-Bold';
`

const LeftText = styled.div`
  position:absolute;
  font-family:'Pretendard-Thin';
  font-size:30px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  transform: rotate(180deg);
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  color:#262626;
`
