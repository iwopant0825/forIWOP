import styled from "styled-components";
import Htmlcssjs from "/htmlcssjs.svg";
import ReactLogo from "/react.svg";

export default function Section6() {
  return (
    <Layout>
      <Title>
        <Introduce>CURRICURAUM</Introduce>
        <TitleText>
          <Hight style={{ color: "#ff6948" }}>HTML</Hight>,{" "}
          <Hight style={{ color: "#4aa2ff" }}>CSS</Hight>,<br />
          <Hight style={{ color: "#ffdf53" }}>JavaScript</Hight>.
        </TitleText>
      </Title>
      <Text>
        IWOP에서 개발자 역할군은 웹을 구성하는 3개의 기술, HTML, CSS,
        JavaScript에 대한 기초 교육을 제공하고 있습니다. 이후에는 최신 웹 개발
        기술인 React 라이브러리를 다루며, 동적인 웹 애플리케이션을 구현하는
        방법을 배웁니다. 또한 협업을 위해 버전 관리 도구인 git,Git Flow,
        GitKraken등을 배우게 됩니다.
      </Text>
      <Chart>
        <ChartLine>
          <CircleLine
            style={{ justifyContent: "space-around", marginBottom: "30px" }}
          >
            <Logo src={Htmlcssjs} />
            <Logo src={ReactLogo} />
          </CircleLine>
          <Line />
          <CircleLine>
            <Circle style={{}} />
            <Circle style={{}} />
            <Circle style={{}} />
          </CircleLine>
          <CircleLine style={{ marginTop: "30px" }}>
            <ChartText style={{ position: "relative", right: "22px" }}>
              학기초
            </ChartText>
            <ChartText>여름방학</ChartText>
            <ChartText style={{ position: "relative", left: "22px" }}>
              학기말
            </ChartText>
          </CircleLine>
        </ChartLine>
      </Chart>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  padding: 170px 130px;
  background-color: black;
`;
const Logo = styled.img``;
const ChartText = styled.div`
  color: white;
  font-size: 24.618px;
`;
const Chart = styled.div`
  margin-top: 100px;
`;
const ChartLine = styled.div``;
const Line = styled.div`
  position: relative;
  top: 8px;
  width: 100%;
  height: 3px;
  background-color: #888;
`;
const CircleLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 1000px;
  background-color: #888;
`;

const Title = styled.div`
  flex-direction: column;
  display: flex;
`;
const Introduce = styled.span`
  font-size: 20px;
  color: white;
`;
const TitleText = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 130px;
`;
const Hight = styled.span`
  font-family: "Pretendard-Bold";
`;
const Text = styled.div`
  color: white;
  font-size: 23px;
  margin-top: 100px;
`;
