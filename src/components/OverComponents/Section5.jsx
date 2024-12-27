import styled from "styled-components";

export default function Section5() {
  return (
    <Layout>
      <Title>Iwop pictures</Title>
      <One>
        <Img style={{ width: "80%" }} src={"/img/img1.png"} alt="Image 1" />
        <Img style={{ width: "20%" }} src={"/img/img2.png"} alt="Image 2" />
      </One>
      <Img style={{ width: "100%" }} src={"/img/img3.png"} alt="Image 3" />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  padding: 300px 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  width: 100%;
  justify-content:center;
  color: #86868B;
  font-size: 19px;
  display: flex;
  text-align: center;
  margin-bottom:100px;
`;

const One = styled.div`
  margin-bottom: 40px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

const Img = styled.img``;
