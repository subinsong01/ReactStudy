import React, { useState } from 'react';
import TodoInputPage from './TodoInputPage';
import TodoMainPage from './TodoMainPage';
function TodoApp(props) {
    const [mode, setMode] = useState("input")
    const [todoList, setTodoList] = useState([])
    //외부에서 mode수정을 위한 함수
    function changePage( _mode ){
        setMode( _mode )
    }
    //할일등록함수
    function addTodo( td ){
        setTodoList( [...todoList, td] )
    }
    let page = null;
    if( mode === "main" )
        page = <TodoMainPage
                todoList={todoList}
                onChangePage={changePage} />; //화면에 보여줄 내용
    else
        page = <TodoInputPage
                onChangePage={changePage}
                onTodoInput={addTodo}/>; //화면에 보여줄 내용
    return (
        <div>
            {page}
        </div>
    );
}
export default TodoApp;