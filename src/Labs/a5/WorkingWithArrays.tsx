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
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const createTodo = async () => {
    const newTodo = {
        title: "New Todo",
        description: "Description of new todo",
        due: "2024-01-01",
        completed: false
    };
    try {
        const response = await axios.post(API, newTodo);
        setTodos([...todos, response.data]);
    } catch (error) {
        console.error(error);
        setErrorMessage((error as any).response?.data.message);
    }
};

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map(t => (t.id === todo.id ? response.data : t)));
        } catch (error) {
            console.error(error);
            setErrorMessage((error as any).response?.data.message);
        }
    };
    const deleteTodo = async (id: number) => {
        try {
            await axios.delete(`${API}/${id}`);
            setTodos(todos.filter(t => t.id !== id));
        } catch (error) {
            console.error(error);
            setErrorMessage((error as any).response?.data.message);
        }
    };


    const updateDescription = () => {
        const url = `${API}/${todo.id}/updateDescription`;
        const data = { description: todo.description };
        axios.put(url, data);
    };

    const updateCompleted = () => {
        const url = `${API}/${todo.id}/updateCompleted`;
        const data = { completed: todo.completed };
        axios.put(url, data);
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
            <textarea value={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            /><br />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({ ...todo, due: e.target.value })}
            /><br />
            <label>
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
                />
                Completed
            </label><br />
            <button onClick={createTodo} className="btn btn-primary">Create Todo</button>
            <button onClick={() => updateTodo()} className="btn btn-success">Update Todo</button>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete Todo</button>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input checked={todo.completed} type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        <button onClick={() => setTodo(todo)} className="btn btn-warning">Edit</button>
                        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Remove</button>
                    </li>
                ))}
            </ul>
        </div> 
    );
}

export default WorkingWithArrays;