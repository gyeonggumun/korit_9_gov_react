import { useState } from "react";

function App02_5() {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    
    const handleNameOnChange = (e) => {
        setName(e.target.value);
    }

    const handleContentOnChange = (e) => {
        setContent(e.target.value);
    }

    const handleOnClick = () => {
        const todo = {
            name: name,
            contents: content,
            writeDate: new Date().toLocaleString(),
        }
        setTodos([...todos, todo]);
        setName("");
        setContent("");
    }



    return <div>
        <div>
            <input type="text" value={name} onChange={handleNameOnChange} placeholder="이름" />
            <input type="text" value={content} onChange={handleContentOnChange} placeholder="내용" />
            <button onClick={handleOnClick}> 확인</button>
        </div>
        <ul>{todos.map(todo => <li>작성자: {todo.name} 내용: {todo.content} 작성일: {todo.writeDate}</li>)}</ul>
    </div>
}

export default App02_5;