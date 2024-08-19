import React, { useContext } from 'react';
import CalcContext from './CalcContext';

function CalcBody(props) {
  const calc2 = useContext(CalcContext);
  
  function handleSubmit(e){
    e.preventDefault();//화면 리로딩을 방지시킴
    let exp= ""
    exp += e.target.n1.value
    exp += e.target.opr.value
    exp += e.target.n2.value
    console.log("exp=", exp)
    //props.calc(exp)
    calc2(exp)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='n1' size="5" required></input>
        <select name='opr'>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input name='n2' size='5' required></input>
        <input type='submit' value="계산"></input>
      </form>
    </div>
  );
}

export default CalcBody;