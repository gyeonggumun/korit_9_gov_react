import { useState } from "react";

function App02_4() {
    const [todos, setTodos] = useState([]);
    
    return <>
        <TodoInput todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos}/>
    </>
}

function TodoInput({todos, setTodos}) {
    const [value, setValue] = useState({
        writer: "",
        age: "",
        content: "",
    });

    const handleOnChange = (e) => {
        const {name, value:inputValue} = e.target;
        setValue({
            ...value,
            [name]: inputValue,
        });
    }

    const handleOnClick = () => {
        
        const todo = {
            ...value,
            writeDate: new Date().toLocaleString(),
        }
        setTodos([...todos, todo]);
        setValue({
            writer: "",
            age: "",
            content: "",
        });
        

    }


    return <div>
        <input type="text" name="writer" value={value.writer} onChange={handleOnChange} placeholder="이름"/>
        <input type="text" name="age" value={value.age} onChange={handleOnChange} placeholder="나이"/>
        <input type="text" name="content" value={value.content} onChange={handleOnChange} placeholder="내용"/>
        <button onClick={handleOnClick}>입력</button>
    </div>
}

function TodoList({todos}) {
    
    return <ul>
        {
            todos.map(todo => <li>작성자:{todo.writer} 나이: {todo.age} 내용:{todo.contents}  작성일{todo.writeDate}</li>)
        }
        </ul>
}








export default App02_4;
