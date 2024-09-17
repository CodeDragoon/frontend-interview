//  add a task
//  mark as done
// reorder  <move up/ move down>
// remove the task

import { useEffect, useState } from "react"


type todo = {
    id: number,
    text: string,
    order: number,
    status: boolean
}


const Todo = () => {

    const [todos, setTodos] = useState<todo[]>([]);
    const [text, setText] = useState('');



    useEffect(() => {
        const previous = localStorage.getItem('todos');
        if (previous) {
            setTodos(JSON.parse(previous));
        }
        console.log({ previous })

        return () => {
            if (todos.length > 0) {

                localStorage.setItem('todos', JSON.stringify(todos))
            }
        }
    }, [])

    useEffect(() => {
        if (todos.length > 0) {
            // localStorage.setItem('todos', JSON.stringify(todos))
        }

    }, [todos])


    const handleAdd = () => {

        const newTodo: todo = {
            id: Date.now(),
            text: text,
            order: todos.length,
            status: false
        };

        const temp = [...todos];
        setTodos([...temp, newTodo]);

    }


    const handleStatusUpdate = (id: number, status: boolean) => {

        const temp = [...todos]

        const targetTodo = temp.find((item) => {
            return item.id === id
        })

        if (targetTodo) {
            targetTodo.status = status
        }

        setTodos([...temp])



    }


    const displayTodos = todos.sort((a, b) => {
        return b.order - a.order
    })



    const removeTodo = (id: number) => {
        const temp = [...todos];
        const filtered = temp.filter((item) => {
            return item.id !== id
        })
        setTodos(filtered)
    }





    return <div>

        {
            displayTodos.map((item) => {
                return <Task key={item.id} text={item.text} id={item.id} handleStatusUpdate={handleStatusUpdate} removeTodo={removeTodo} />
            })
        }

        <input type="text" value={text} onChange={(e) => {
            setText(e.target.value)
        }} />

        <button onClick={handleAdd}>Add Task</button>

    </div>

}


const Task = ({ text, id, handleStatusUpdate, removeTodo }: todo & {
    handleStatusUpdate: (id: number, value: boolean) => void,
    removeTodo: (id: number) => void
}) => {

    return <div>
        <input type="checkbox" onChange={(e) => {

            handleStatusUpdate(id, e.target.checked)
        }} />
        {text}
        <button >Move up</button>
        <button onClick={() => {
            removeTodo(id)
        }}>Delete</button>
    </div>

}

export default Todo