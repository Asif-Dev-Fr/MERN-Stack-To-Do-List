import React from 'react';
import { useForm } from 'react-hook-form';

const CreateTodo = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
    });
    
    return(
        <div className="create-page">
            <div className="mt-3">
                <h3>Create Todo Item</h3>
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

export default CreateTodo;