import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';

const EditTodo = () => {

    const [todo, setTodo] = useState();

    useEffect(() => {
        setTodo({
            text: "foo2"
        })
    }, []);
    
    return todo ? <TodoForm todo={todo} /> : <div>Loading</div>
}

export default EditTodo;