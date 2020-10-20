import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { TodoForm } from './TodoForm';

const CreateTodo = () => {

    // Enregister les informations du formulaire :
    // register a mettre dans les inputs :
    // handleSubmit à mettre dans la fonction onSubmit : 
    // const { register, handleSubmit } = useForm();
    // Redirection après submit : 
    // const history = useHistory();

    const onSubmit = /*handleSubmit(*/(data) => {
        alert(JSON.stringify(data));
        // redirection au submit
        // history.push('/');
    }/*)*/;

    return (
        <div className="create-page">
            <div className="mt-3">
                <h3>Edit Todo Item</h3>
                <TodoForm  onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default CreateTodo;