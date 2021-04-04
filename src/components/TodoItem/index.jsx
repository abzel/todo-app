import React from 'react'
import './TodoItem.css'

export const TodoItem = ({todo}) => {
    return <div className="todo-item">
        {todo.text}
        <button onClick={completeTodo}>complete</button>
        <button onClick={deleteTodo}>delete</button>
    </div>
}
const deleteTodo = (e) => {
    e.currentTarget.parentNode.remove(e.parentNode)
};

const completeTodo = (e) => {
    let done = e.currentTarget.parentNode.classList.contains('done')

    done
        ? e.currentTarget.parentNode.classList.remove('done')
        : e.currentTarget.parentNode.classList.add('done')
}

