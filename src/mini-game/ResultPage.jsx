import React from 'react';

function ResultPage(props) {
    const {winCount, resultList} = props
    return (
        <div>
            {resultList.length>=10 ? <h3>게임종료</h3>: <h3>10회중 {resultList.length+1}번째 선택</h3>}
            <hr></hr>
            <h3>승률: {((winCount/resultList.length)*100).toFixed(2)} %</h3>
            <ul style={{listStyleType:"none"}}>
                {resultList.map((r)=>{
                    return <li>{r}</li>
                })}
            </ul>
        </div>
    );
}

export default ResultPage;