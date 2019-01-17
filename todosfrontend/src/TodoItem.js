import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    
    
    <li className="item">
        <span 
        className="task"
        style= {{
            textDecoration: completed? 'line-through' : 'none'
        }}
        onClick={onToggle}
        >
        
        {name}
        </span>
        <span onClick={onDelete}> X </span>
    </li>
)

export default TodoItem;