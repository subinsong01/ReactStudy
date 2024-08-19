import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
`
function GawibawiboInput(props) {
  function handleRockClick(){
    props.onButtonClick(0)
  }
  function hanleScissorsClick(){
    props.onButtonClick(1)
  }
  function handlePaperClick(){
    props.onButtonClick(2)
  }
  return (
    <div>
      <Button onClick={handleRockClick}>가위</Button>
      <Button onClick={hanleScissorsClick}>바위</Button>
      <Button onClick={handlePaperClick}>보</Button>
      <div>가위, 바위, 보 하나만 선택하세요 </div><hr></hr>
    </div>
  );
}
export default GawibawiboInput;