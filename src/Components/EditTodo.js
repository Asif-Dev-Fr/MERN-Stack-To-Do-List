import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';

const EditTodo = () => {

    const [todo, setTodo] = useState();
    const [validation] = useState('Update Todo');

    useEffect(() => {
        setTodo({
            text: "foo2"
        })
    }, []);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    
    return todo ? (
            <div className="create-page">
                <div className="mt-3">
                    <h3>Edit Todo Item</h3>
                    <TodoForm todo={todo} onSubmit={onSubmit} validation={validation} /> 
                </div>
            </div> )
        
        : (<div>Loading</div>)
}

export default EditTodo;