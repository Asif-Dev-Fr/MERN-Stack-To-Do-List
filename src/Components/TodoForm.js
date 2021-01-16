import React from 'react';
import { useForm } from 'react-hook-form';

export const TodoForm = ({ todo, onSubmit, validation }) => {

    // Editer les informations du formulaire :
    // defaultValues permet de récupérer les informations existantes : 
    const { register, handleSubmit } = useForm({
        defaultValues: {
            text: todo ? todo.text : ""
        }
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
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