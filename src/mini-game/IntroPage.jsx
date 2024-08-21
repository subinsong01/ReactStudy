import React from 'react';

function IntroPage(props) {
  const handleClick = () =>{
    props.changePage("main")
  }
  return (
    <div>
      <h3>가위바위보 게임</h3>
      <p>컴퓨터와 가위바위보를 해보세요</p>
      <button onClick={handleClick}>게임시작</button>
      <p>게임시작버튼을 눌러 시작하세요</p>
    </div>
  );
}

export default IntroPage;