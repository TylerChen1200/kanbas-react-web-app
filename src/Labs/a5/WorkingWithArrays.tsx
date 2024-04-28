import React, { useState, useEffect } from 'react';
import axios from "axios";


function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "New Task",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const API = "http://localhost:4000/a5/todos";
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
      };    
    const removeTodo = async (todo: any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo: any) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      };
    
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      };
    


    useEffect(() => {
        fetchTodos();
    }, []);

    const updateDescription = () => {
        window.open(`${API}/${todo.id}/updateDescription/${encodeURIComponent(todo.description)}`, '_blank');
    };

    const updateCompleted = () => {
        const completedStatus = todo.completed ? 'true' : 'false';
        window.open(`${API}/${todo.id}/updateCompleted/${completedStatus}`, '_blank');
    };

    return (
        <div>
            <input
                type="number"
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value, 10) })}
            /><br />
            <input
                type="text"
                value={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            /><br />
            <a href={`${API}/${todo.id}`} className="btn btn-primary">Get Todo by ID</a>


            <h3>Working with Arrays</h3>
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <br />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <br />
            <label>
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => setTodo({
                        ...todo,
                        completed: e.target.checked
                    })} />
                Completed
            </label>
            <br />
            <button onClick={postTodo} className="btn btn-primary"> Post Todo </button>
            <br />
            <button onClick={updateTodo} className="btn btn-success">
                Update Todo
            </button>

            <button onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2">
                Delete
            </button>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <br />
            <button onClick={createTodo} className="btn btn-primary">
                Create Todo
            </button>
            <button onClick={updateTitle} className="btn btn-success">
                Update Title
            </button>
            <h4>Retrieving Arrays</h4>
                        <a href={API}>Get Todos</a>
                        <h4>Retrieving an Item from an Array by ID</h4>

                        <h3>Updating an Item in an Array</h3>
                        <button onClick={updateDescription} className="btn btn-primary">
                            Update Description
                        </button><br />
                        <label>
                            Completed:
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
                            />
                        </label><br />
                        <button onClick={updateCompleted} className="btn btn-primary">
                            Update Completed Status
                        </button><br />
                        <a href={`${API}?completed=true`} className="btn btn-primary">Get Completed Todos</a>
                        <h3>Creating new Items in an Array</h3>
                        <a href={`${API}/create`} className="btn btn-primary">Create Todo</a>
                        <h3>Deleting from an Array</h3>
                        <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
                            Delete Todo with ID = {todo.id}
                        </a>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>

                        <ul>
                            {todos.map((todo) => (
                                <li key={todo.id}>
                                    {todo.title}
                                    <button onClick={() => removeTodo(todo)} className="btn btn-danger">
                                        Remove
                                    </button>
                                    <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning">
                                        Edit
                                    </button>


                                </li>
                            ))}
                        </ul>

                       
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default WorkingWithArrays;