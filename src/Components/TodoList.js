import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from './Api';

const TodoList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos();
            setItems(todos);
        };
        fetchData();
    }, [])

    return(
        <div className="homepage">
            <div className="mt-3">
                <h3 className="text-center">Todo List</h3>
                <table className="table table-striped mt-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item._id}>
                                    <td>{item.text}</td>
                                    <td>
                                        <Link to={"/edit/" + item._id}>Edit</Link>
                                    </td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;