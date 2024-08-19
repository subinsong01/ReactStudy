import React from 'react';

function GawibawiboResult(props) {

  //const gbb = ['가위', '바위', '보'] 초보ver
  const gbb = "가위,바위,보".split(",")
  //if 보다는 배열, 맵을 사용


  return (
    <div>
      <p>당신의 선택 :{gbb[props.result.userNum]} </p>
      <p>컴퓨터의 선택 :{gbb[props.result.comNum]} </p>
      <p>결과: {props.result.result}</p>
    </div>
  );
}

export default GawibawiboResult;