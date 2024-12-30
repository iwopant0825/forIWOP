import styled from "styled-components";
import TrashIwopLogo from "/img/trashIwop.png";
import IwopLogo from "/IwopLogo.svg";
import TapieLogo from "/tapie.svg";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <SmallTitle>23년 IWOP의 역사</SmallTitle>
        <SmallconText>
          IWOP is the only web development club in the Department of Software,
          established in 2001, and has consistently achieved excellent
          performance to date, further enhancing the web development
          capabilities of students in the Department of Software.
        </SmallconText>
      </div>
      <Box>
        <BoxLeft>
          <img src={TrashIwopLogo} />
        </BoxLeft>
        <BoxRight>
          <BoxTtile>2001~2022 IWOP</BoxTtile>
          <BoxText>과거 리브랜딩 되기전 IWOP</BoxText>
        </BoxRight>
      </Box>
      <Box>
        <BoxRight>
          <BoxTtile>2023 IWOP</BoxTtile>
          <BoxText>새롭게 브랜딩한 IWOP</BoxText>
        </BoxRight>
        <BoxLeft>
          <img src={IwopLogo} />
        </BoxLeft>
      </Box>
      <Box>
        <BoxLeft>
          <img src={TapieLogo} />
        </BoxLeft>
        <BoxRight>
          <BoxTtile>2001~2022 IWOP</BoxTtile>
          <BoxText>애플파이, 아이왑, 에드캔이 합쳐져 새롭게 탄생한 동아리 TAPIE</BoxText>
        </BoxRight>
      </Box>
    </Layout>
  );
}

const Box = styled.div`
  width: 100%;
  display: flex;
  height: 40vw;
  margin-top: 100px;
`;
const BoxLeft = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
    height: auto;
  }
`;
const BoxRight = styled.div`
  width: 50%;
  background-color: #f2f2f2;
  padding: 10vw 3vw;
`;
const BoxTtile = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  margin-bottom: 50px;
`;
const BoxText = styled.div`
  color: #86868b;
  font-size: 4vw;
`;

const Layout = styled.div`
  width: 100%;  
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
`;

const SmallTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10vw;
  font-family: "Pretendard-Bold";
  margin-top: 270px;
  @media (max-width: 992px) {
    margin-top: 100px;;
  }
  color: #1d1d1f;
`;
const SmallconText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 2vw;
  width: 70%;
  margin-top: 20px;
  color: #86868b;
  text-align: center;
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
  position: absolute;
  z-index: -1;
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
  position: relative;
  font-family: "Pretendard-Bold";
  font-size: 8vw;
`;
