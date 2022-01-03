import React, { useEffect, useState } from 'react';


interface todos {
    userId: number;
    id: number;
    title: string;
    completed: string;

}

const Todos = () => {
    const [url] = useState('https://jsonplaceholder.typicode.com/todos')
    const [todos, setTodos] = useState<todos[]>(
        [{
            userId: 0,
            id: 0,
            title: 'loading',
            completed: 'loading',
        }]
    )
    const [todo, setTodo] = useState<todos>(
        {
            userId: 0,
            id: 0,
            title: 'loading',
            completed: 'loading',
        }
    )

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setTodos(result))
    }, [url])

    const getTodo = (id: number) => {
        fetch(url + `/${id}`)
            .then(response => response.json())
            .then(result => setTodo(result))
    }

    return (
        <>
            {
                todo.title!=='loading' && (
                    <div>
                        {todo.title} - {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
                        <button onClick={() => setTodo(
                            {
                                userId: 0,
                                id: 0,
                                title: 'loading',
                                completed: 'loading',
                            }
                        )}>Go back</button>
                    </div>
                )
            }
            {
              todo.title==='loading' && todos.map(todo => (
                    <div key={todo.id}>
                        <button onClick={() => getTodo(todo.id)}>
                            {todo.title} by {todo.userId} - {todo.completed ? 'Completed' : 'Pending'}
                        </button>
                    </div>
                ))
            }
        </>
    )
}

export default Todos