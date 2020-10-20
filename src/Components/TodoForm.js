import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo, onSubmit, validation }) => {

    // Editer les informations du formulaire :
    // defaultValues permet de récupérer les informations existantes : 
    const { register, handleSubmit } = useForm({
        defaultValues: {
            text: todo ? todo.text : ""
        }
    });
    // Redirection après submit : 
    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push('/');
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input ref={register} id="text" type="text" name="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success"> {validation} </button>
            </div>
        </form>

    )
}