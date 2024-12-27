import styled from "styled-components";

export default function Section7() {
  return (
    <Layout>
      <Title>
        <Introduce>History</Introduce>
        <TitleText>
          200
          <span style={{ color: "#1C97D0", fontFamily: "Pretendard-Bold" }}>
            1
          </span>
          ~20
          <span style={{ color: "#00EA3A", fontFamily: "Pretendard-Bold" }}>
            23
          </span>
          <br />
          <span style={{ color: "#1C97D0", fontFamily: "Pretendard-Bold" }}>
            IWOP
          </span>
          <TitleTextIWOP>IWOP</TitleTextIWOP>
        </TitleText>
      </Title>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 170px 130px;
`;
const TitleTextIWOP = styled.span`
  font-family: "Pretendard-Bold";
  background: linear-gradient(
    91deg,
    rgba(0, 255, 30, 0.27) 4.85%,
    rgba(0, 140, 255, 0.27) 99.41%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:absolute;
  z-index:-1;
`;
const Title = styled.div`
  flex-direction: column;
  display: flex;
`;
const Introduce = styled.span`
  font-size: 20px;
  color: #000000;
`;
const TitleText = styled.span`
  position:relative;
  font-family: "Pretendard-Bold";
  font-size: 130px;
`;
