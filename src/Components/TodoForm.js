import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo }) => {

    // Editer les informations du formulaire :
    // defaultValues permet de récupérer les informations existantes : 
    const { register, handleSubmit } = useForm({
        defaultValues: {
            text: todo ? todo.text : ""
        }
    });
    // Redirection après submit : 
    const history = useHistory();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        history.push('/');
    });

    return(
        <div className="create-page">
            <div className="mt-3">
                <h3>Edit Todo Item</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input ref={register} id="text" type="text" name="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Create Todo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}