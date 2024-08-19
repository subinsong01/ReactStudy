import React, { useState } from 'react';
import CalcHeader from './CalcHeader';
import CalcBody from './CalcBody';
import CalcResult from './CalcResult';
import CalcContext from './CalcContext';

function MyCalc(props) {

  //계산식, 결과를 저장하는 변수를 state로 관리 
  const [calcExp, setCalcExp] = useState("")
  const [calcResult, setCalcResult] = useState("")

  function calc(exp){
    let r = eval(exp)
    console.log("eval=", r)
    setCalcResult(r)
  }

  return (
    <div>
      <CalcContext.Provider value={calc}>
        <CalcHeader />
        <CalcBody calc={calc}/>{/*props로 함수 calc를 전달*/}
        <CalcResult calcExp={calcExp} calcResult={calcResult}/>
      </CalcContext.Provider>
    </div>
  );
}

export default MyCalc;