import styled from "styled-components";
import IwopLogo from '/IwopLogo.svg'
export default function OverHeader({scrollTest}) {
  return (
    <>
      <HeaderLayout>
        <List>
          <img width={60} src={IwopLogo}/>
        </List>
        <List>
          <ListButton>INTRODUCE</ListButton>
          <ListButton>CURRICURAUM</ListButton>
          <ListButton>History</ListButton>
        </List>
      </HeaderLayout>
    </>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  padding: 26px 130px;
  display: flex;
  position: fixed;
  z-index: 999;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const List = styled.div`
  display: flex;
  align-items:center;
  gap:52px;
`;

const ListButton = styled.div`
  font-size:20px;
  color: #2b2b2b;
  font-family:'Pretendard-Regular';
`;
