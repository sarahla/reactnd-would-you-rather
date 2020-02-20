import React, { useState } from 'react';

function LoginForm() {
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        const user = e.target.value;
        setUser(user);

        console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Dispatch Login Event 
        console.log(`User: ${user}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange}>
                    <option defaultValue disabled>Select a User</option>
                    <option value="user1">User 1</option>
                    <option value="user2">User 2</option>
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )   
}

export default LoginForm;