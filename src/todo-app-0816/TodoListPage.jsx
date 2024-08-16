import React from 'react';

function TodoListPage(props) {
    const {todoList, onDetailTodo} = props

    function handleClick(){
        props.onChangePage("input")
    }
    function handleTitleClick(e){
        e.preventDefault() //화면 리로딩방지
        console.log(e.target.href)
        let no = e.target.href.split("/").pop() //링크의 마지막 숫자 추출
        console.log(no)
    }

    let todoTbody = []
    for(let td of todoList){
        let obj = <tr key={td.no}>
                    {/* <td><a href={td.no} onClick={handleTitleClick}>{td.title}</a></td> */}
                    <td><a href={td.no} onClick={(e)=>{
                        e.preventDefault() //화면 리로딩방지
                        onDetailTodo(td.no)
                        props.onChangePage("detail")
                        console.log(td.no)
                    }}>{td.title}</a></td>
                    <td><input type='checkbox'></input>완료
                        <button>삭제</button>
                    </td>
                  </tr>
        todoTbody.push(obj)
    }

    return (
        <div>
            <h1>TodoListPage</h1>
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {todoTbody}
                </tbody>
            </table>
            <button onClick={handleClick}>등록화면</button>
            
            {/* <button onClick={ ()=>{
                props.onChangePage("input")
            }  }>메인</button> */}
        </div>
    );
}

export default TodoListPage;