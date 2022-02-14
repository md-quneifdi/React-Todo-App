import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import ToDoList from './Todolist.css';
import TodoListItems from '../TodolistItems/TodolistItems';


class TodoList extends Component {
 // first we difiend the value as new todo in the state 
    state = {
        todos: [],
        newTodo: ''
    }

    handleChange = event => {
        this.setState({newTodo: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.newTodo === "") {
            return; 
        }
        let todosLenght = this.state.todos.length;
        this.setState({
            newTodo: '', // here we empty this value
            todos:[
                ...this.state.todos,
                 {
                    id: (todosLenght += 1),
                    // here we save the input value in the newTodo to use it later
                    title: this.state.newTodo, 
                    isCompleted: false
                 }
                ]
        });
    }

     toggleCompleted = (event,index) => {
        const todoCompleted = this.state.todos.filter(todo => {
            if(todo.id === index+1) {
                todo.isCompleted = event.target.checked;
            }
            return todo;
        });
        this.setState({ todos: todoCompleted });
     }

     removeToDo = (index) => {
         const { todos } = this.state;
         todos.splice(index, 1);
         this.setState({ todos });
     }

     editToDo = (index) => {
         const newTodo = prompt("Edit The Item :");
         // console.log(newTodo)
         const { todos } = this.state;
         todos.filter(todo => {
             if(todo.id === index + 1) {
                 todo.title = newTodo;
             }
             return todo;
         });
         this.setState({ todos });
     }

    render(){
        return(

            // secondary we pass the new todo as  props to the form component 
            <div className="todolist container d-flex-column w-50 mt-5 pb-3">
                <TodoForm todos={this.state.todos}
                          newTodo={this.state.newTodo} 
                          handleChanges={this.handleChange}
                          handleSubmition={this.handleSubmit} 
                 />
                <TodoListItems 
                    todos={this.state.todos} 
                    handleOnChange={this.toggleCompleted}
                    handleOnRemove={this.removeToDo}
                    handleOnEdit={this.editToDo}
                /> 

            </div>
        );
    }
}

export default TodoList;