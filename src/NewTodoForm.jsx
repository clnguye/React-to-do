import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    //const [newTodo, setNewTodo] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem) 

        // setTodos(currentTodos => {
        //     return [
        //         ...currentTodos,
        //         {id: crypto.randomUUID, title: newItem, completed: false },
        //     ]
        // })

        setNewItem("")
    }

return (
    <form onSubmit={handleSubmit} onDoubleClick={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)}
                //onKeyUp={e => setNewItem(e.target.value)}
                type="text" 
                id="item"
            />
        </div>
        <button className="btn">Add</button>
    </form>
)
}