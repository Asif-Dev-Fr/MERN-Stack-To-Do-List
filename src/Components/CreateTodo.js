import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TodoForm } from './TodoForm';
import { createTodo } from './Api';

const CreateTodo = () => {

    const [ validation ] = useState('Create Todo');
    const history = useHistory()
 
    // Enregister les informations du formulaire :
    // register a mettre dans les inputs :
    // handleSubmit à mettre dans la fonction onSubmit : 
    // const { register, handleSubmit } = useForm();
    // Redirection après submit : 
    // const history = useHistory();

    const onSubmit = async (data) => {
        await createTodo(data);
        history.push("/");
    };

    return (
        <div className="create-page">
            <div className="mt-3">
                <h3>Create Todo Item</h3>
                <TodoForm  onSubmit={onSubmit} validation={validation} />
            </div>
        </div>
    )
}

export default CreateTodo;