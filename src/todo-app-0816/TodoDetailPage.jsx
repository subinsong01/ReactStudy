import React from 'react';
import { useState } from 'react';
function TodoDetailPage(props) {
    const [no, setNo ] = useState(props.todoObj.no)
    const [title, setTitle ] = useState(props.todoObj.title)
    const [done, setDone ] = useState(props.todoObj.done)
    const [content, setContent ] = useState(props.todoObj.content)
    function handleSubmit(e){ 
        e.preventDefault()
    }
    return (
        <div>
            <h1>할일상세보기</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    할일제목: <input name="td_title" value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} ></input>
                </label><br></br>
                <label>
                    완료여부: <input type='checkbox' checked={done} name="td_title" onChange={(e)=>{
                        setDone(e.target.checked)
                    }}></input>완료
                </label><br></br>
                <label>
                    할일내용: <textarea name="td_content" value={content}  onChange={(e)=>{
                        setContent(e.target.value)
                    }} ></textarea>
                </label><br></br>
                <input type='submit' value="저장"></input>
                <button onClick={(e)=>{
                    
                    props.onChangePage("main")
                }}>삭제</button>
                <button onClick={(e)=>{
                    props.onChangePage("main")
                }}>메인</button>
            </form>
        </div>
    );
}
export default TodoDetailPage;