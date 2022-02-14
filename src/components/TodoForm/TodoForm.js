import React, { Component } from "react";
import './TodoForm.css';

class TodoForm extends Component {
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmition}>
                    {/* third we set the value of the form fild to the newtodo  */}
                    <div className='input-icon'>
                        <i className="bi bi-card-checklist icon"></i>
                        <input type='text'
                               placeholder='add a task...' 
                               autoComplete='off' 
                               value={this.props.newTodo}
                               onChange={this.props.handleChanges}
                         />
                        {/* <h2>{console.log(this.props.newTodo)}</h2> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;