import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getTodo, updateTodo } from './Api';
import { TodoForm } from './TodoForm';

const EditTodo = () => {

    const match = useRouteMatch();
    const [todo, setTodo] = useState();
    const [validation] = useState('Update Todo');
    const history = useHistory()

    useEffect(() => {
      const fetchTodo = async () => {
        const todo = await getTodo(match.params.id)
        setTodo(todo)
      }
      fetchTodo()
    }, [match.params.id]);

    const onSubmit = async (data) => {
        await updateTodo(data, match.params.id);
        history.push("/");
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