import React from 'react'
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './Todo_State';

const Todo_Component = () => {
    const [todos, setTodos] = useRecoilState(todoListState);
    const [inputValue, setInputValue] = useState("");
  
    
    const addTodo = () => {
      if (inputValue.trim() === "") return;
  
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, isComplete: false },
      ]);
      setInputValue(""); 
    };
  
    
    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        )
      );
    };
  
    
    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Recoil To-Do List</h1>
  
        
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a task..."
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "250px",
              marginRight: "10px",
            }}
          />
          <button
            onClick={addTodo}
            style={{ padding: "10px", fontSize: "16px" }}
          >
            Add Task
          </button>
        </div>
  
        
        <ul style={{ listStyle: "none", padding: "20px" }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none",
                fontSize: "18px",
                margin: "10px 0",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  marginRight: "10px",
                  color: todo.isComplete ? "green" : "black",
                }}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  fontSize: "14px",
                  color: "white",
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Todo_Component