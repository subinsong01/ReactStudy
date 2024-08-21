import React, { useState } from 'react';
import IntroPage from './IntroPage';
import GameInput from './GameInput';
import ResultPage from './ResultPage';
import GameHeader from './GameHeader';

function Game(props) {
  const [mode, setMode] = useState("intro") //defult = main
  const [resultList, setResultList] = useState([]) //결과값
  const [winCount, setWinCount] = useState(0);

  let pageObj = {
    "intro":<IntroPage changePage={changePage} />,
    "main":<>
        <GameInput onButtonClick={checkResult} />
        <ResultPage
          winCount={winCount}
          resultList={resultList} />
          </>
  }
  let page = pageObj[mode];
  function changePage(pageName){
    setMode(pageName)
  }
  function checkResult(userNum){
     //10회이면 중지
     if(resultList.length==10) return;
     const gbb = "가위,바위,보".split(",")
     //난수 생성. 0=가위  1=바위  2=보
     const comNum = Math.floor(Math.random()*3)//0,1,2
     let r = "사람 승" //판정결과
     if( userNum == comNum ){
         r = "비김"
     }else if( (comNum == 0 & userNum == 2) || 
                 (comNum == 1 && userNum == 0) ||
                 (comNum == 2 && userNum == 1)){ //사람 패한 경우만 계산
         r = "사람 패"
     }else{
         setWinCount(winCount+1)
     }
     let rs = `사람=${gbb[userNum]} : 컴퓨터=${gbb[comNum]} =>${r}`        
     setResultList( [...resultList, rs] )
  }
  return (
    <div className='App'>
        <GameHeader />
        {page}
    </div>
);
}

export default Game;