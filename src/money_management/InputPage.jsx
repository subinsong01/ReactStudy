import React, { useState } from 'react';
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

function InputPage(props) {
  const [date, setDate] = useState('');

  const handleChangeDate = (e) => {
    const currentValue = e.target.value;
    setDate(currentValue);
  };
  
  function handleClick(e){
    //메인페이지를 보여주기
    props.onChangePage("main")
}

  return (
    <CenteredContainer>
    <Container>
      <label>
       <PageTitle>용돈관리등록</PageTitle> <br />
        구분: 
        <OptionBox>
        <select>
          <option value="register">등록</option>
          <option value="revise">수정</option>
          <option value="delete">삭제</option>
        </select><br /></OptionBox>
        사용처: <StyledInput type="text" placeholder="사용한 장소를 입력해주세요" /><br />
        용도: <StyledInput type="text" placeholder="사용 내역을 입력해주세요" /><br />
        금액: <StyledInput type="text" placeholder="금액을 입력해주세요" /><br />
        날짜: <StyledInput
          type="text"
          value={date}
          placeholder="yyyy-mm-dd"
          onChange={handleChangeDate}
        />
      </label><br></br>
     <Button><button onClick={handleClick}>메인</button></Button> 
    </Container>
    </CenteredContainer>
  );
}

export default InputPage;
