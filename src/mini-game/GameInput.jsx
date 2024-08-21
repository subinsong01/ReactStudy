import React from 'react';

function GameInput(props) {

  const handleRockClick=()=>{
    props.onButtonClick(0)
  }
  const handleScissorsClick=()=>{
    props.onButtonClick(1)
  }
  const handlePaperClick=()=>{
    props.onButtonClick(2)
  }
  return (
    <div>
      <button onClick={handleRockClick}>가위</button>
      <button onClick={handleScissorsClick}>바위</button>
      <button onClick={handlePaperClick}>보</button>

      <h3>가위, 바위, 보 하나만 선택해주세요</h3>
      <hr></hr>
    </div>
  );
}

export default GameInput;