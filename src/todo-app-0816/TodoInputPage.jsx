import React from 'react';

function TodoInputPage(props) {
    const {onTodoAdd, onChangePage} = props
    /*
    폼화면, 입력받아서 할일객체생성, 할일목록에 등록
    */
    function handleSubmit(e){
        e.preventDefault()//화면 리로딩 중지
        let todoForm = e.target //전송이벤트발생태그
        let title = todoForm.td_title.value; //name속성으로 접근
        let content  = todoForm.td_content.value; //name속성으로 접근
        console.log('title', title, content)
        let todoObj = {
            no : new Date().getMilliseconds(),
            title:title,
            content:content
        }
        onTodoAdd( todoObj )
        onChangePage("main")
    }
    return (
        <div>
            <h1>TodoInputPage</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    할일제목: <input name="td_title" ></input>
                </label><br></br>
                <label>
                    할일내용: <textarea name="td_content"></textarea>
                </label><br></br>
                <input type='submit' value="등록"></input>
            </form>
        </div>
    );
}

export default TodoInputPage;