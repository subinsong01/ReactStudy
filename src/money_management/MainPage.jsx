import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  width: 100vw; 
`;

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  padding:30px;
  gap: 15px;
  height: auto;
  width: 250px;
  border: 1px solid #0A6ECD; 
  border-radius: 12px;
  flex-direction: column;
`
const PageTitle = styled.div`
  font-size: 20px;
  font-weight:700;
  align-items: center;
`
const OptionBox = styled.div`
  border: 1px solid #0A6ECD;  
`
const Button = styled.button`
  font-size: 10px;
  margin: 5px;
  padding: 8px 12px;
  border-radius: 3px;
  color: white;
  background-color: #0A6ECD; 
  border: 2px solid #0A6ECD;
  cursor: pointer;

  &:hover {
    background-color: #085a9e;
    border-color: #085a9e;
  }
`;

const StyledInput = styled.input`
  width: 100%;  
  border: 1px solid #0A6ECD;
  padding: 3px;
  font-size: 14px;
  box-sizing: border-box;
  margin-bottom:3px;
`;
function MainPage(props) {
 
  function handleList(e) {
    props.onChangePage("input");
  } // 등록 화면으로

  function handleRegister(e) {
    props.onChangePage("main");
  }

  return (
    <CenteredContainer>
      <Container>
      <form>
        <label>
        <PageTitle>용돈관리메인<br /></PageTitle>
          <select>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select><br></br>
          <label>
            수입 :
            <StyledInput  type="text" /><br />
            지출 :
            <StyledInput  type="text" /><br />
          </label>
        </label>
      </form>
      <div>
      <Button><button onClick={handleList}>내역</button></Button>
      <Button><button onClick={handleRegister}>등록</button></Button>
      </div>
     </Container>
    </CenteredContainer>
  );
}

export default MainPage;
