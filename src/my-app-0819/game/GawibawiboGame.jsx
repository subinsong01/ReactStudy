import React from 'react';
import GawibawiboHeader from './GawibawiboHeader';
import GawibawiboInput from './GawibawiboInput';
import GawibawiboResult from './GawibawiboResult';
import { useState } from 'react';

function GawibawiboGame(props) {

    const [result, setResult ] = useState("")

    function checkResult( userNum ){
        //난수 생성. 0=가위  1=바위  2=보
        const comNum = Math.floor(Math.random()*3)//0,1,2
        let r = "사람 승" //판정결과
        if( userNum == comNum ){
            r = "비김"
        }else if( (comNum == 0 & userNum == 2) || 
                    (comNum == 1 && userNum == 0) ||
                    (comNum == 2 && userNum == 1)){ //사람 패한 경우만 계산
            r = "사람 패"
        }
        setResult( { userNum:userNum, comNum:comNum, result:r } )//화면 리렌더링
    }

    return (
        <div className='App'>
            <GawibawiboHeader />
            <GawibawiboInput onButtonClick={checkResult}/>
            <GawibawiboResult result={result}/>
        </div>
    );
}

export default GawibawiboGame;