import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, deleteItem } from "./CRUD_Slice";

const CRUD_UI = () => {
    
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crud.items);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  
  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };

  
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  
  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateItem({ id: editId, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Toolkit CRUD App</h2>

      
      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", width: "250px", marginRight: "10px" }}
        />
        <button onClick={handleAdd} style={{ padding: "10px", fontSize: "16px" }}>Add</button>
      </div>

      
      <ul style={{ listStyle: "none", padding: "20px" }}>
        {items.map((item) => (
          <li key={item.id} style={{ fontSize: "18px", margin: "10px 0" }}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ padding: "5px", fontSize: "16px" }}
                />
                <button onClick={handleUpdate} style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "14px" }}>Save</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button onClick={() => handleEdit(item.id, item.text)} style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "14px" }}>Edit</button>
                <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "14px", color: "white", backgroundColor: "red", border: "none", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD_UI;
