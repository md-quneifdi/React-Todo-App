import React from "react";
import "../TodolistItems/TodolistItems.css";
import Checkbox from "../Elements/Checkbox.js";

function TodolistItems (props) {
    const {todos} = props;

    const todoItem = todos.map((todo,index) => {
        return(
            <div key={todo.id} className='todoComponent d-flex w-75 mx-auto'>
                <div className='todoCompLeft'>
                    
                    <label>
                        <Checkbox 
                            className="checkbox-element"
                            checked={todo.isCompleted}
                            size={20}
                            checkedColor="#2e3238"
                            uncheckedColor="#343a40"
                            hoverColor="#343a40"
                            onChange={(event) => props.handleOnChange(event, index)}
                         />
                
                    </label>
                </div>
                <div 
                className='todoCompRight d-flex justify-content-between flex-grow-1 px-3'>
                    <div className='todoTitle'>
                        <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>
                                 {todo.title} 
                             </span>
                    </div>
                    <div>
                        <i 
                            className="bi bi-pencil-square"
                            aria-hidden="true"
                            onClick={() => props.handleOnEdit(index)}
                        ></i>

                        <i onClick={() => props.handleOnRemove(index)} 
                            className="bi bi-trash3-fill fa-trash"
                            aria-hidden="true" >
                        </i>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div className='todoListItems w-full'>
            <hr className='hrt' />
            {todos.length === 0 && (
                <h3 className='noTodos'>let's get some tasks done!</h3>
            )}
            {todos.length > 0 && todoItem}
        </div>
    );
}

export default TodolistItems;