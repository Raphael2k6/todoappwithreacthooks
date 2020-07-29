import React, { useState } from 'react';


function TodoForm ({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
    }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={value}
                onChange={event => setValue(event.target.value)} 
                placeholder="Add todo..."    
                /> 
            </form>
        )
}

export default TodoForm;